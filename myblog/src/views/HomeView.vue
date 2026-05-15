<script setup lang="ts">
import PostCard from '../components/PostCard.vue';
import matter from 'front-matter'

type PostListItem = {
    slug: string; 
    title: string;
    date?: string;
    summary?: string;
  }

const postFiles = import.meta.glob<string>('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

type PostFrontMatter = {
  title?: string
  date?: string
  summary?: string
}

const posts: PostListItem[] = Object.entries(postFiles).map(([path, raw]) => {
  const slug = (path.split('/').pop() ?? '').replace(/\.md$/, '')

  const { attributes } = matter<PostFrontMatter>(raw)

  return {
    slug,
    title: attributes.title ?? slug,
    date: attributes.date,
    summary: attributes.summary,
  }
})
</script>

<template>
  <div class="article">
          <h1>Welcome to My Blog</h1>
          <p>This is a simple blog layout inspired by a terminal interface. Feel free to explore and read the posts!</p>
          <p class="dim">This blog is built using Vue.js and styled to look like a CRT terminal. The navigation on the left allows you to browse through different sections of the blog.</p>
          <p>Enjoy your stay and happy reading!</p>

          <p>-----------------------------------------</p>
          <h2>Latest Posts</h2>
          <p>Here are some of the latest posts on the blog. Click on "Read More" to dive into the full article.</p>
            <div class="post-list">
            <PostCard
                v-for="post in posts"
                :key="post.slug"
                :slug="post.slug"
                :title="post.title"
                :summary="post.summary"
                :date="post.date"
            />
          </div>
        </div>
</template>

<style scoped>
.dim {
  color: var(--crt-green-dim);
}

.article {
  max-width: 70ch;
  margin: 0 auto;
}

.post-list {
  list-style: none;
  margin-bottom: 1rem;
}
</style>
