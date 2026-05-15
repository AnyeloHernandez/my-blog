<!-- Shows a Post with an image, title and a button -->
<!-- Recieves T -->
<script setup lang="ts">
const props = defineProps<{
  slug?: string
  title?: string
  imageUrl?: string
  summary?: string
  date?: string
}>()


</script>

<template>
    <div class="post-card">
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dougsartgallery.com%2Fimages%2FASCII-tux-linux1.gif&f=1&nofb=1&ipt=d99c8b996d4174a57ac02adaed44e82f9b459dd22e520ac3616403a8ab17bc05" 
            alt="Post Image" 
            class="post-image"
            loading="lazy">
        <div class="post">
            <h3 class="post-title">{{ props.title }}</h3>
            <p class="post-date">{{ props.date }}</p>
            <p class="post-summary">{{ props.summary }}</p>
            <RouterLink :to="`/posts/${props.slug}`" class="read-more">
              Read More
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.post-card {
  border: 1px solid var(--crt-green);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  display: flex;
}

.post {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.post-image {
  width: 240px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin-right: 1rem;
}

.post-title {
  margin: 0.5rem 0;
}

.post-summary {
  color: var(--crt-green-dim);
  margin-bottom: 1rem;
}

.read-more {
  background: var(--crt-green);
  color: var(--crt-bg);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.post-date {
  color: var(--crt-green-dim);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  margin-top: 0px;
}
</style>