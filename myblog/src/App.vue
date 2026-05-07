<script setup lang="ts">
import TerminalHeader from './components/TerminalHeader.vue'
</script>

<template>
  <div class="crt-screen">
    <TerminalHeader user="anyelo" host="blog.local" />
    <main class="content">
      <p>Sistema iniciado. Bienvenido al blog.</p>
      <p class="dim">Próximo paso: agregar contenido y rutas.</p>
    </main>
  </div>
</template>

<style scoped>
.crt-screen {
  min-height: 100vh;
  background: var(--crt-bg);
  color: var(--crt-green);
  font-family: var(--font-mono);
}

.content {
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.dim {
  color: var(--crt-green-dim);
}
</style>