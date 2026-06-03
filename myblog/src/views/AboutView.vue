<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next';
</script>

<template>
    <div class="about">
        <h1>Hello (っ◕‿◕)っ</h1>
        <div class="card">
            <p>I'm Anyelo Hernández, welcome to my Blog! 
                I'm a last year Computer Science student at University of San Carlos of Guatemala, and I'm passionate about software development, cloud computing, and open source. I enjoy learning new technologies and working on projects that challenge me to grow as a developer.</p>
            <p>I'm currently learning more about IoT and embedded systems, and I'm always looking for opportunities to collaborate on interesting projects. Feel free to check out my repositories and reach out if you want to connect or work together!</p>
        </div>
    </div>
    <div class="contact-me">
        <h2>Contact Me</h2>
        <p>You can find me on GitHub and LinkedIn:</p>
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
    </div>
</template>

<style scoped>  
.about {
    max-width: 600px;
    margin: 0 auto;
}

.contact-me {
    max-width: 600px;
    margin: 2rem auto;
}

.card {
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>