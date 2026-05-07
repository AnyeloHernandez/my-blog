<script setup lang="ts">
</script>

<template>
    <div class="navbar">
        <div class="side-nav-header">
        <h2>Navigation</h2>
    </div>
    <nav class="side-nav">
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">About</a></li>
        </ul>
    </nav>
    </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--crt-green-dim);
}

.side-nav-header {
  padding: 1rem;
  border-bottom: 1px solid var(--crt-green-dim);
  width: 300px;
}

.side-nav {
  width: 300px;
  background: var(--crt-green-dim);
  padding: 1rem;
  padding-left: 2rem;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-nav li {
  margin-bottom: 1rem;
}
</style>