<template>
  <section class="min-h-screen flex flex-col items-center justify-center text-center bg-secondary/30" id="hero">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl md:text-6xl font-bold text-primary mb-4 transition-opacity duration-700" data-aos="fade-down">
        pro.mama — курсы для будущих мам
      </h1>
      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" alt="Беременная" class="mx-auto mb-6 rounded-lg shadow" />
      <p class="text-lg md:text-2xl mb-6 text-gray-700">
        Забота, знание и поддержка на каждом этапе вашей беременности
      </p>
      <button
        class="bg-primary hover:bg-pink-300 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        @click="$emit('scrollTo', 'signup')"
      >
        Записаться на курс
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
