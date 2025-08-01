<script setup>
import { ref } from 'vue';
import { theme, toggleTheme, lang, toggleLanguage, T } from '../store.js';

// State untuk membuka/menutup menu mobile
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-colors duration-300">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      
      <div class="text-2xl font-bold text-gray-800 dark:text-white">
        Wahid Nurrohim
      </div>
      
      <div class="flex items-center space-x-2 md:space-x-4">
        <ul class="hidden md:flex space-x-6">
          <li><a href="#profil" @click="isMenuOpen = false" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.profil }}</a></li>
          <li><a href="#pendidikan" @click="isMenuOpen = false" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.pendidikan }}</a></li>
          <li><a href="#skill" @click="isMenuOpen = false" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.skill }}</a></li>
          <li><a href="#proyek" @click="isMenuOpen = false" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.proyek }}</a></li>
          <li><a href="#kontak" @click="isMenuOpen = false" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300">{{ T.kontak }}</a></li>
        </ul>

        <div class="flex items-center space-x-2 md:space-x-4">
          <button @click="toggleTheme" class="relative text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 w-9 h-9 flex items-center justify-center rounded-full focus:outline-none overflow-hidden">
            <transition name="fade-scale" mode="out-in">
              <svg v-if="theme === 'light'" key="sun" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              <svg v-else key="moon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </transition>
          </button>
          
          <button @click="toggleLanguage" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-bold text-sm border-2 border-gray-400 dark:border-gray-500 w-8 h-8 rounded-full focus:outline-none">
            {{ lang.toUpperCase() }}
          </button>
        </div>

        <button @click="toggleMenu" class="md:hidden text-gray-600 dark:text-gray-300 p-2 rounded-full focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
    
    <div v-if="isMenuOpen" class="md:hidden bg-white/95 dark:bg-gray-900/95">
      <ul class="flex flex-col items-center space-y-4 py-4">
        <li><a href="#profil" @click="isMenuOpen = false" class="text-gray-800 dark:text-gray-200 font-medium">{{ T.profil }}</a></li>
        <li><a href="#pendidikan" @click="isMenuOpen = false" class="text-gray-800 dark:text-gray-200 font-medium">{{ T.pendidikan }}</a></li>
        <li><a href="#skill" @click="isMenuOpen = false" class="text-gray-800 dark:text-gray-200 font-medium">{{ T.skill }}</a></li>
        <li><a href="#proyek" @click="isMenuOpen = false" class="text-gray-800 dark:text-gray-200 font-medium">{{ T.proyek }}</a></li>
        <li><a href="#kontak" @click="isMenuOpen = false" class="text-gray-800 dark:text-gray-200 font-medium">{{ T.kontak }}</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>