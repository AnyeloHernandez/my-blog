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
    <header>
        <img 
        :src="attributes.image"
        alt="No img">
        <h1>{{ attributes.title }}</h1>
    </header>
    <div class="post-content" v-html="postContent"></div>
</template>