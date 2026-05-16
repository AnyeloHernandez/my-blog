<!-- Post reader -->
 <!-- Uses the content of the .md -->
<script setup lang="ts">
import matter from 'front-matter'
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';

const route = useRoute();
const slug = route.params.slug as string

const postFiles = import.meta.glob<string>('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const raw = postFiles[`../content/posts/${slug}.md`]

type PostFrontMatter = {
  title?: string
  date?: string
  summary?: string
  image?: string
}

const { attributes, body } = matter<PostFrontMatter>(raw ?? '')

const md = new MarkdownIt()
const postContent = md.render(body)

</script>

<template>
    <article class="article">
    <header>
        <img
            class="post-image"
            :src="attributes.image"
            alt="No img"
            loading="lazy">
    </header>
    <div class="post-content" v-html="postContent"></div>
    </article>
</template>

<style scoped>
.article {
  max-width: 80ch;
  margin: 0 auto;
}

.post-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}

:deep(.post-content code) {
  background: rgba(0, 255, 0, 0.08);
  color: var(--crt-green);
  font-family: var(--font-mono);
  border: 1px solid rgba(0, 255, 0, 0.25);
  border-radius: 3px;
  padding: 0.15em 0.4em;
  font-size: 0.875em;
}

:deep(.post-content pre) {
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
}

:deep(.post-content pre code) {
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.9em;
}

:deep(.post-content img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  filter: none;
  position: relative;
  z-index: 10000;
}
</style>
