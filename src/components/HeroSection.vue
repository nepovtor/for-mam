<template>
  <section
    class="min-h-screen flex items-center bg-gradient-to-b from-pink-50 via-orange-100 to-yellow-50"
    id="hero"
  >
    <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 text-center md:text-left">
        <h1
          class="text-4xl md:text-6xl font-bold font-poppins text-primary mb-4 transition-opacity duration-700"
          data-aos="fade-down"
        >
          pro.mama — курсы для будущих мам
        </h1>
        <p class="text-lg md:text-2xl mb-6 text-gray-700">
          Забота, знание и поддержка на каждом этапе вашей беременности
        </p>
        <button
          class="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
          @click="$emit('scrollTo', 'signup')"
        >
          Записаться на курс
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1457342813143-a1ae27448a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        alt="Беременная"
        class="w-full md:w-1/2 max-w-md mx-auto rounded-lg shadow-xl mt-8 md:mt-0 md:ml-8"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
