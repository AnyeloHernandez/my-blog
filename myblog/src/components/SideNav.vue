<script setup lang="ts">
import { Github, Linkedin, LinkedinIcon } from 'lucide-vue-next';
</script>

<template>
    <aside class="sidebar">
      <header class="sidebar-header">
        <h2>Navigation</h2>
      </header>
    <nav class="sidebar-nav">
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">About</a></li>
        </ul>
    </nav>
    <nav class="other-links">
        <ul>
        <li><a 
              href="https://github.com/AnyeloHernandez"
              target="_blank"
              rel="noopener noreferrer"><Github :size="16" /> <span class="social-link">GitHub</span></a></li>
        <li><a 
              href="https://www.linkedin.com/in/anyelo-hernandez/"
              target="_blank"
              rel="noopener noreferrer"><Linkedin :size="16"/> <span class="social-link">Linkedin</span></a></li>
        </ul>
    </nav>
    </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--crt-green);
  width: 300px;
}

.sidebar-header {
  padding: 1rem;
}

.sidebar-header h2 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--crt-green);
  padding: 0.5rem 0;
}

.sidebar-nav {
  padding: 1rem;
  padding-left: 2rem;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin-bottom: 1rem;
}

.other-links {
  margin-top: auto;
  padding: 1rem;
  border-top: 1px solid var(--crt-green-dim);
  margin-bottom: 48px;
}

.sidebar-nav a::before {
  content: '> ';
  color: var(--crt-green-dim);
}
</style>