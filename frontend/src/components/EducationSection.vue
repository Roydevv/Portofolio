<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
import { T, lang } from '../store.js';

const educationHistory = ref([]);

async function fetchEducation() {
  try {
    const response = await axios.get(`/api/education?lang=${lang.value}`);
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

watch(lang, fetchEducation, { immediate: true });
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle :title="T.title_education" />
      <div class="relative wrap overflow-hidden p-4 h-full">
        <div class="absolute h-full border-2 border-blue-500/30 dark:border-blue-400/30 rounded" style="left: 20px;"></div>
        
        <div v-for="edu in educationHistory" :key="edu.id" class="mb-8 flex items-center w-full">
          <div class="z-20 flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-400 rounded-full shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v11.494m-5.495-8.495l10.99 5.495-10.99-5.495z"/></svg>
          </div>
          <div class="pl-8">
            <p class="font-semibold text-blue-600 dark:text-blue-400">{{ edu.period }}</p>
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">{{ edu.institution }}</h3>
            <p v-if="edu.major" class="text-gray-600 dark:text-gray-400">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>