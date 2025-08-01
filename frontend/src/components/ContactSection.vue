<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
import { T } from '../store.js'; // <-- Impor T

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const isSending = ref(false);
const messageSent = ref(false);
const errorMessage = ref('');

async function handleSubmit() {
  isSending.value = true;
  errorMessage.value = '';
  try {
    await axios.post('/api/send-email', form);
    messageSent.value = true;
  } catch (error) {
    errorMessage.value = T.value.contact_error;
    console.error(error);
  } finally {
    isSending.value = false;
  }
}
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle :title="T.title_contact" />
      
      <div v-if="messageSent" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">{{ T.contact_thanks_strong }}</strong>
        <span class="block sm:inline">{{ T.contact_thanks_span }}</span>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="max-w-xl mx-auto">
        <p class="text-xl text-gray-300 dark:text-gray-400 mb-8">{{ T.contact_desc }}</p>
        
        <div class="mb-4">
          <input v-model="form.name" type="text" :placeholder="T.contact_name" required class="w-full px-4 py-2 rounded bg-gray-700 dark:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <input v-model="form.email" type="email" :placeholder="T.contact_email" required class="w-full px-4 py-2 rounded bg-gray-700 dark:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-6">
          <textarea v-model="form.message" :placeholder="T.contact_message" rows="4" required class="w-full px-4 py-2 rounded bg-gray-700 dark:bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        
        <button type="submit" :disabled="isSending" class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-500">
          {{ isSending ? T.contact_sending : T.contact_button }}
        </button>
        
        <p v-if="errorMessage" class="text-red-400 mt-4">{{ errorMessage }}</p>
      </form>

      <div class="flex justify-center space-x-6 mt-12 mb-8">
        <a href="https://github.com/wahidnur659" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
        <a href="https://wa.me/6282281899371" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">WhatsApp</a>
      </div>
      <p class="text-gray-500">&copy; {{ new Date().getFullYear() }} Wahid Nurrohim. {{ T.footer_made_with }} Vue.js</p>
    </div>
  </footer>
</template>