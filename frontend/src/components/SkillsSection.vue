<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
import { T, lang } from '../store.js';

const skills = ref([]);

const getLevel = (percentage) => {
  if (percentage >= 96) return T.value.level_pakar;
  if (percentage >= 81) return T.value.level_sangat_mahir;
  if (percentage >= 66) return T.value.level_mahir;
  if (percentage >= 41) return T.value.level_menengah;
  return T.value.level_dasar;
};

async function fetchSkills() {
  try {
    const response = await axios.get(`/api/skills?lang=${lang.value}`);
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

watch(lang, fetchSkills, { immediate: true });
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <SectionTitle :title="T.title_skills" />      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300"
        >          
          <div class="flex justify-between mb-2">
            <span class="text-base font-medium text-gray-800 dark:text-gray-200">{{ skill.name }}</span>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ getLevel(skill.percentage) }}</span>
          </div>
          
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5">
            <div 
              class="relative bg-blue-600 h-5 rounded-full flex items-center justify-end" 
              :style="{ width: skill.percentage + '%' }"
            >
              <span class="pr-2 text-xs font-bold text-white">
                {{ skill.percentage }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>