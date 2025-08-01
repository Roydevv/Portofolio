<script setup>
import { ref, watch } from 'vue'; // Ganti onMounted menjadi watch
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
import { T, lang } from '../store.js'; // Impor 'lang' dari store

const projects = ref([]);

// Fungsi untuk mengambil data proyek
async function fetchProjects() {
  try {
    // Tambahkan query parameter ?lang=... ke URL API
    const response = await axios.get(`/api/projects?lang=${lang.value}`);
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

// Gunakan watch untuk mengawasi perubahan 'lang'
watch(lang, fetchProjects, { immediate: true });
// { immediate: true } akan menjalankan fetchProjects() saat pertama kali komponen dimuat
</script>

<template>
  <section id="proyek" class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle :title="T.title_projects" />
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="project in projects" :key="project.title" class="bg-gray-50 dark:bg-gray-900/50 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span v-for="t in project.tech" :key="t" class="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{{ t }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">{{ T.project_button }} &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>