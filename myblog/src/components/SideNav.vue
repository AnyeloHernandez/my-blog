<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next';
</script>

<template>
    <aside class="sidebar">
      <header class="sidebar-header">
        <h2>Navigation</h2>
      </header>
    <nav class="sidebar-nav">
        <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/posts">Posts</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
    </nav>
    <ul class="sidebar-image">
    <li><img src="../assets/jill.webp"></li>
    </ul>      
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
  overflow-y: auto;
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
  margin-top: 0.5rem;
  padding: 1rem;
  border-top: 1px solid var(--crt-green-dim);
  margin-bottom: 48px;
}

.sidebar-nav a::before {
  content: '> ';
  color: var(--crt-green-dim);
}

.sidebar-image {
  margin-top: auto;
  padding: 0 0.7rem;
  margin-bottom: 1rem;
  list-style: none;
}

.sidebar-image li {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;

  box-shadow: 0 0 8px var(--crt-green-dim);
}

.sidebar-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* verde CRT */
  filter:
    grayscale(1)
    sepia(1)
    hue-rotate(85deg)
    saturate(3.5)
    contrast(1.1)
    brightness(0.8);

  opacity: 0.95;
}

/* scanlines + brillo encima */ 
.sidebar-image li::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;

  background:
    repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0) 2px,
      rgba(0, 0, 0, 0.18) 3px
    );
  mix-blend-mode: overlay;
  opacity: 0.8;
}

.sidebar-image li::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;

  background: radial-gradient(circle at 50% 50%, var(--crt-green-dim), transparent 60%);
  mix-blend-mode: screen;
  opacity: 0.15;
}

@media (max-width: 1440px) {
  .sidebar {
    width: 220px;
  }

  .sidebar-header h2 {
    font-size: 1.1rem;
  }

  .sidebar-nav {
    padding: 0.75rem;
    padding-left: 1rem;
  }

  .other-links {
    padding: 0.75rem;
  }
}
</style>
