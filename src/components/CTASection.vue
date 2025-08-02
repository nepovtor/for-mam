<template>
  <section class="py-16 bg-gradient-to-r from-secondary via-accent to-white" id="signup">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center text-primary mb-8">Записаться на курс</h2>
      <form
        class="max-w-xl mx-auto grid gap-4 bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg"
        @submit.prevent="submit"
      >
        <input
          v-model="name"
          type="text"
          placeholder="Имя"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        />
        <input
          v-model="phone"
          type="tel"
          placeholder="Телефон"
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        />
        <button
          type="submit"
          class="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
        >
          Отправить заявку
        </button>
      </form>
        <p v-if="success" class="text-green-600 text-center mt-4">Спасибо! Мы свяжемся с вами.</p>
        <p v-if="error" class="text-red-600 text-center mt-4">{{ error }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const success = ref(false)
const error = ref('')

async function submit() {
  success.value = false
  error.value = ''
  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value
      })
    })
    if (!res.ok) {
      const msg = (await res.json()).error || 'Ошибка отправки'
      throw new Error(msg)
    }
    name.value = ''
    email.value = ''
    phone.value = ''
    success.value = true
  } catch (e: any) {
    error.value = e.message || 'Неизвестная ошибка'
  }
}
</script>

<style scoped>
</style>
