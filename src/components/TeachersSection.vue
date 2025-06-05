<template>
  <section class="py-16 bg-secondary/10" id="teachers">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center text-primary mb-8">Наши преподаватели</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(t, i) in teachers"
          :key="i"
          class="p-6 bg-white rounded-lg shadow text-center group transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            :src="t.img"
            :alt="t.name"
            class="w-32 h-32 object-cover rounded-full mx-auto mb-4 transition-transform group-hover:scale-105"
          />
          <h3 class="font-semibold mb-1">{{ t.name }}</h3>
          <p class="text-sm text-gray-600 mb-2">{{ t.role }}</p>
          <button @click="toggle(i)" class="text-primary underline">Подробнее</button>
          <p v-if="open === i" class="mt-2 text-gray-600">{{ t.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Teacher {
  name: string
  role: string
  img: string
  desc: string
}

const open = ref<number | null>(null)
function toggle(i: number) {
  open.value = open.value === i ? null : i
}

const teachers: Teacher[] = [
  {
    name: 'Анна',
    role: 'Акушерка',
    // поместите файл anna.jpg в папку src/assets/teachers
    img: new URL('../assets/teachers/anna.jpg', import.meta.url).href,
    desc: 'Практикующая акушерка с опытом более 10 лет. Ведёт занятия по подготовке к родам.'
  },
  {
    name: 'Роза',
    role: 'Доула',
    // поместите файл roza.jpg в папку src/assets/teachers
    img: new URL('../assets/teachers/roza.jpg', import.meta.url).href,
    desc: 'Помогает женщинам чувствовать себя уверенно и поддерживает их на каждом этапе беременности.'
  },
  {
    name: 'Марина',
    role: 'Педиатр',
    // поместите файл marina.jpg в папку src/assets/teachers
    img: new URL('../assets/teachers/marina.jpg', import.meta.url).href,
    desc: 'Рассказывает о первом годе жизни малыша и отвечает на вопросы о здоровье ребёнка.'
  }
]
</script>

<style scoped>
</style>
