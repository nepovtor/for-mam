<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProgramSection from './components/ProgramSection.vue'
import TeachersSection from './components/TeachersSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CTASection from './components/CTASection.vue'
import FooterSection from './components/FooterSection.vue'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <HeroSection @scrollTo="scrollTo" />
  <AboutSection />
  <ProgramSection />
  <TeachersSection />
  <TestimonialsSection />
  <CTASection />
  <FooterSection />
</template>

<style scoped>
</style>
