<script setup>
import { onMounted, ref, watch, computed } from 'vue'
// Impor T (translations) dan lang (bahasa) dari store
import { T, lang } from '../store.js'

// --- PENGATURAN KECEPATAN ---
const greetingTypingSpeed = 100
const roleTypingSpeed = 120
const roleErasingSpeed = 60
const delayBeforeErase = 2000

// --- State untuk teks ---
const typedGreeting = ref('')
const typedName = ref('')
const typedRole = ref('')
const showNameCursor = ref(false)
const showRoleCursor = ref(false)

// --- BAGIAN PENTING UNTUK FIX BUG ---
// Array untuk menyimpan semua ID dari setTimeout yang sedang berjalan
let timeoutIds = []

// Fungsi untuk membersihkan semua timeout
function clearAllTimeouts() {
  timeoutIds.forEach(id => clearTimeout(id))
  timeoutIds = []
}

// Wrapper untuk setTimeout agar ID-nya tersimpan
function setAnimationTimeout(callback, delay) {
  const id = setTimeout(callback, delay)
  timeoutIds.push(id)
}
// --- AKHIR DARI BAGIAN FIX BUG ---


// Teks sumber
const fullGreeting = computed(() => T.value.hero_greeting)
const fullName = computed(() => ' Wahid Nurrohim.') // Pakai computed agar reaktif jika perlu
const fullRole = computed(() => T.value.hero_role)

// 1. Mengetik "Halo, Saya"
function typeGreeting() {
  let i = 0
  function type() {
    if (i < fullGreeting.value.length) {
      typedGreeting.value += fullGreeting.value.charAt(i)
      i++
      setAnimationTimeout(type, greetingTypingSpeed)
    } else {
      showNameCursor.value = true
      typeName()
    }
  }
  type()
}

// 2. Mengetik " Wahid Nurrohim."
function typeName() {
  let i = 0
  function type() {
    if (i < fullName.value.length) {
      typedName.value += fullName.value.charAt(i)
      i++
      setAnimationTimeout(type, greetingTypingSpeed)
    } else {
      showNameCursor.value = false
      showRoleCursor.value = true
      setAnimationTimeout(typeRole, 500)
    }
  }
  type()
}

// 3. Mengetik dan menghapus "Web Developer" (looping)
let roleCharIndex = 0
let isErasingRole = false
function typeRole() {
  showRoleCursor.value = true
  if (isErasingRole) {
    if (typedRole.value.length > 0) {
      typedRole.value = fullRole.value.substring(0, typedRole.value.length - 1)
      setAnimationTimeout(typeRole, roleErasingSpeed)
    } else {
      isErasingRole = false
      roleCharIndex = 0
      setAnimationTimeout(typeRole, roleTypingSpeed)
    }
  } else {
    if (roleCharIndex < fullRole.value.length) {
      typedRole.value += fullRole.value.charAt(roleCharIndex)
      roleCharIndex++
      setAnimationTimeout(typeRole, roleTypingSpeed)
    } else {
      isErasingRole = true
      setAnimationTimeout(typeRole, delayBeforeErase)
    }
  }
}

// Fungsi utama untuk memulai/mereset animasi
function startAnimation() {
  clearAllTimeouts() // <-- HENTIKAN SEMUA ANIMASI LAMA SEBELUM MEMULAI

  typedGreeting.value = ''
  typedName.value = ''
  typedRole.value = ''
  showNameCursor.value = false
  showRoleCursor.value = false
  roleCharIndex = 0
  isErasingRole = false
  
  setAnimationTimeout(typeGreeting, 500)
}

// Awasi perubahan bahasa, lalu mulai ulang animasi
watch(lang, startAnimation)

// Mulai animasi pertama kali
onMounted(startAnimation)
</script>

<template>
  <section id="profil" 
    class="bg-teal-50 dark:bg-gray-900 transition-colors duration-300 container mx-auto px-6 flex flex-col md:flex-row items-center min-h-screen pt-24 pb-12 md:py-0"
  >
    <div class="md:w-1/2 w-full self-stretch mb-10 md:mb-0 animate-slidein-left">
      <img src="/images/pp.jpg" alt="Foto Profil" class="w-full h-full object-cover">
    </div>

    <div class="md:w-1/2 md:pl-16 animate-slide-in-right">
      <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
        {{ T.hero_kicker }}
      </p>      
      
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-1">
        <span>{{ typedGreeting }}</span><span class="text-orange-500">{{ typedName }}</span><span v-if="showNameCursor" class="blinking-cursor">|</span>
      </h1>
      
      <h2 class="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6 h-8">
        {{ typedRole }}<span v-if="showRoleCursor" class="blinking-cursor">|</span>
      </h2>
      
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {{ T.hero_description }}
      </p>
      <a href="#kontak" class="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        {{ T.hero_button }}
      </a>
    </div>
  </section>
</template>

<style>
.blinking-cursor {
  font-weight: 500;
  color: #fb923c; /* Warna oranye */
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: #fb923c; /* Warna oranye */
  }
}
</style>