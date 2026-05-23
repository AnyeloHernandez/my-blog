<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ slug: string }>()
const giscusContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'AnyeloHernandez/my-blog')
  script.setAttribute('data-repo-id', 'R_kgDORQ_wUQ')
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'DIC_kwDORQ_wUc4C9ZGO')
  script.setAttribute('data-mapping', 'og:title')
  script.setAttribute('data-strict', '1')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'catppuccin_mocha')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  giscusContainer.value?.appendChild(script)
})
</script>

<template>
  <div ref="giscusContainer" />
</template>