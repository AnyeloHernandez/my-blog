<script setup lang="ts">
import SideNav from './components/SideNav.vue';
import TerminalHeader from './components/TerminalHeader.vue'
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="crt-screen">
    <TerminalHeader user="anyelo" host="blog.local" />
    <div class="layout">
    <SideNav />
      <main class="content">
          <RouterView />
      </main>
    </div>
    
  </div>
</template>

<style scoped>
.crt-screen {
  height: 100vh;
  background: var(--crt-bg);
  color: var(--crt-green);
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
}

.content {
  padding: 2rem 1rem;
  flex: 1;
  overflow-y: auto;
  line-height: 1.6;
  max-width: 70ch;
  margin: 0 auto;
}

.layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>