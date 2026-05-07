<script setup lang="ts">
import SideNav from './components/SideNav.vue';
import TerminalHeader from './components/TerminalHeader.vue'
</script>

<template>
  <div class="crt-screen">
    <TerminalHeader user="anyelo" host="blog.local" />
    <div class="layout">
    <SideNav />
      <main class="content">
        <div class="article">
          <h1>Welcome to My Blog</h1>
          <p>This is a simple blog layout inspired by a terminal interface. Feel free to explore and read the posts!</p>
          <p class="dim">This blog is built using Vue.js and styled to look like a CRT terminal. The navigation on the left allows you to browse through different sections of the blog.</p>
          <p>Enjoy your stay and happy reading!</p>

          <p>-----------------------------------------</p>
          <h2>Latest Posts</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur officiis ullam nam dolorum at quidem vero cumque placeat odit repellendus, ducimus, quas officia perferendis fugiat mollitia repudiandae quibusdam fugit voluptates, unde dignissimos nostrum tempora labore eaque porro! Soluta dolore eligendi officiis tempora sit? Quod suscipit quasi excepturi sunt architecto ut cum, officiis corporis blanditiis dolorem vel minima et, fuga accusantium necessitatibus saepe dolore modi laudantium commodi praesentium ipsa labore! Minus vero tempore, est placeat non deserunt, quo provident tenetur repellat autem ullam ex dicta facilis itaque qui nobis, a ratione unde! Ea nobis iure deserunt tempore ut, adipisci odit incidunt vitae unde eius quos. Soluta, vero rerum? Non, at odit expedita soluta ad temporibus, debitis sunt quae, animi libero totam repellat exercitationem nesciunt nulla praesentium optio nobis et odio nihil labore quod adipisci eum! Nemo nulla tenetur veritatis dignissimos, vero minus aspernatur reiciendis perspiciatis repellendus ut accusantium, quis maiores maxime possimus dolores dolorem porro fugiat hic? Quod incidunt odio quis quam placeat sit nihil minima nisi necessitatibus vel aliquam quas, reprehenderit recusandae quisquam ducimus reiciendis cupiditate optio rem molestiae velit maxime? Quaerat voluptatem veritatis odio rerum nesciunt neque eveniet fuga ipsam fugit, aliquam voluptates eligendi commodi, dolor sequi molestias? Aliquid minus excepturi tempore voluptate obcaecati quam quo sint, veniam est nihil, laudantium perferendis id non illo! Placeat veniam ipsa, inventore pariatur perspiciatis eaque. Eaque mollitia expedita, perferendis optio asperiores, quasi minus tenetur facere autem est impedit doloribus ratione? Cum obcaecati porro quos placeat dolore ea doloribus. Perferendis quasi minima excepturi.</p>
          
        </div>
      </main>
    </div>
    
  </div>
</template>

<style scoped>
.crt-screen {
  height: 100vh;
  background: var(--crt-bg);
  color: var(--crt-green);
  font-family: var(--font-mono);
  display: flex;
  flex-direction: column;
}

.content {
  padding: 2rem 1rem;
  flex: 1;
  overflow-y: auto;
  line-height: 1.6;
}

.dim {
  color: var(--crt-green-dim);
}

.layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.article {
  max-width: 70ch;
  margin: 0 auto;
}
</style>