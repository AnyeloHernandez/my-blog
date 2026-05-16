<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  user?: string
  host?: string
}>()

const CHAR_SPEED_MS = 50
const currentTime = ref(new Date())

let timer: number

const formatDateTime = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}


onMounted(() => {
  timer = window.setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const route = useRoute()
const command = ref("")
const showCursor = ref(false)

let currentTimeout: number | null = null

watch(
    () => route.path, async (newRoute) => {
        if (currentTimeout) {
            clearTimeout(currentTimeout)
            currentTimeout = null
        }
        command.value = '' // Reset value
        showCursor.value = false

        await nextTick()

        const slug = route.params.slug

        const newCommand =
            newRoute === '/posts' ? 'ls posts' :
            newRoute === '/about' ? 'cat about-me' :
            newRoute.startsWith('/posts/')  ? `cat ${slug}` :
            ''

        command.value = newCommand
        console.log(newCommand)

        if (newCommand) {
            currentTimeout = window.setTimeout(() => {
            showCursor.value = true
            currentTimeout = null
          }, newCommand.length * CHAR_SPEED_MS) + CHAR_SPEED_MS
          } else {
            showCursor.value = true
        }
    }
)
</script>

<template>
  <header class="terminal-header">
    <div class="prompt">
      <span class="user">{{ props.user ?? 'guest' }}</span>
      <span class="at">@</span>
      <span class="host">{{ props.host ?? 'localhost' }}</span>
      <span class="path">:~$ </span>

      <span class="command">
        <span
            v-for="(char, idx) in command"
            :key="`${command}-${idx}`"
            class="char"
            :style="{ animationDelay: `${idx * (CHAR_SPEED_MS/1000)}s`}"
        >
            {{ char }}
        </span>
      </span>
      <span v-if="showCursor" class="cursor">&#9608;</span>
    </div>
    <div class="clock">
      {{ formatDateTime(currentTime) }}
    </div>
  </header>
</template>

<style scoped>
.terminal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--crt-green-dim);
  font-family: var(--font-mono);
  font-size: 0.95rem;
}

.prompt .user { color: var(--crt-green); }
.prompt .at,
.prompt .path { color: var(--crt-green-dim); }
.prompt .host { color: var(--crt-amber); }

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1.3s steps(2) infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.clock {
  color: var(--crt-green-dim);
  letter-spacing: 0.05em;
}

.char {
    display: inline-block;
    opacity: 0;
    animation: appear 50ms forwards;
    white-space: pre;
}

@keyframes appear {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
</style>
