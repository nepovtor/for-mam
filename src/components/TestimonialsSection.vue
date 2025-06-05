<template>
  <section class="py-16 bg-white" id="testimonials">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center text-primary mb-8">Отзывы</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="p-6 bg-secondary/20 rounded-lg text-center transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          @click="toggle(i)"
        >
          <p class="italic mb-2">{{ t.text }}</p>
          <p v-if="open === i" class="text-sm text-gray-600 mb-2">{{ t.more }}</p>
          <p class="font-semibold">{{ t.name }}</p>
        </div>
      </div>
      <p class="text-center text-sm text-gray-500 mt-4">Нажмите на отзыв, чтобы раскрыть подробности</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Testimonial {
  text: string
  more: string
  name: string
}

const open = ref<number | null>(null)
function toggle(i: number) {
  open.value = open.value === i ? null : i
}

const testimonials: Testimonial[] = [
  {
    text: '«Эти курсы изменили моё отношение к беременности. Чувствую себя уверенной и спокойной»',
    more: 'Было много практики и поддержки, теперь я точно знаю, чего ожидать.',
    name: 'Анна, Москва'
  },
  {
    text: '«Благодаря советам специалистов я подготовилась к родам без лишнего волнения»',
    more: 'Всё по делу и с огромным вниманием к каждой участнице.',
    name: 'Елена, Санкт-Петербург'
  },
  {
    text: '«Удобный формат занятий и дружелюбная атмосфера. Рекомендую всем будущим мамам»',
    more: 'Особенно понравились техники расслабления и дыхания.',
    name: 'Мария, Казань'
  }
]
</script>

<style scoped>
</style>
