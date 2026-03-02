<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar" aria-label="Main navigation">
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
    </nav>
</template>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin: 0;
    padding: 0.75rem 0;
    background: var(--color-background);
    border-bottom: 1px solid var(--color-border);
}

.navbar :deep(a.router-link-exact-active) {
    color: var(--color-text);
}

.navbar :deep(a.router-link-exact-active:hover) {
    background-color: transparent;
}

.navbar :deep(a) {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

.navbar :deep(a:first-of-type) {
    border: 0;
}

@media (min-width: 1024px) {
    .navbar {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>

