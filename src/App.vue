<template>
  <div class="app">
    <Hero />
    <About />
    <Experience />
    <TechSphere />

  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero/Hero.vue';
import About from '@/components/About/About.vue';
import Experience from '@/components/Experience/Experience.vue';
import TechSphere from '@/components/TechSphere/TechSphere.vue';
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

section {
      padding: 0px 24px;
    }
</style>