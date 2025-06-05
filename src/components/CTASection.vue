<template>
  <section class="py-16 bg-gradient-to-r from-secondary via-accent to-white" id="signup">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center text-primary mb-8">Записаться на курс</h2>
      <form class="max-w-xl mx-auto grid gap-4" @submit.prevent="submit">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')

function submit() {
  console.log({ name: name.value, email: email.value, phone: phone.value })
  name.value = ''
  email.value = ''
  phone.value = ''
}
</script>

<style scoped>
</style>
