<!-- This is for the posts navigation -->
<script setup lang="ts">
import PostCard from '../components/PostCard.vue';
import matter from 'front-matter'

type PostListItem = {
    slug: string; 
    title: string;
    imageUrl?: string;
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
  image?: string
}

const posts: PostListItem[] = Object.entries(postFiles).map(([path, raw]) => {
  const slug = (path.split('/').pop() ?? '').replace(/\.md$/, '')

  const { attributes } = matter<PostFrontMatter>(raw)

  return {
    slug,
    title: attributes.title ?? slug,
    imageUrl: attributes.image,
    date: attributes.date,
    summary: attributes.summary,
  }
})
</script>

<template>
    <div class="content">
        <h1>Posts lists</h1>
        <div class="post-list">
            <PostCard
                v-for="post in posts"
                :key="post.slug"
                :slug="post.slug"
                :title="post.title"
                :imageUrl="post.imageUrl"
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

.post-list {
  list-style: none;
  margin-bottom: 1rem;
}

.content {
    max-width: 90ch;
    margin: 0 auto;
}
</style>

