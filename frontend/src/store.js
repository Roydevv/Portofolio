import { ref, computed, watchEffect } from 'vue';

// --- STATE TERPUSAT ---
export const theme = ref('light'); // 'light' atau 'dark'
export const lang = ref('id'); // 'id' atau 'en'

// --- LOGIKA TEMA ---
export function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}

// Efek samping untuk mengubah class di <html>
watchEffect(() => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});


// --- LOGIKA BAHASA ---
const translations = {
  // --- Teks Bahasa Indonesia ---
  id: {
    // Navbar
    profil: 'Profil',
    pendidikan: 'Pendidikan',
    skill: 'Keahlian',
    proyek: 'Proyek',
    kontak: 'Kontak',
    // Hero Section
    hero_kicker: 'Tentang Saya',
    hero_greeting: 'Halo, Saya',
    hero_role: 'Web Developer',
    hero_description: 'Mahasiswa Teknik Informatika yang berfokus pada pengembangan web dan desain antarmuka. Saya mengubah ide menjadi produk digital yang fungsional, menarik, dan mudah digunakan.',
    hero_button: 'Hubungi Saya',
    // Section Titles
    title_education: 'Riwayat Pendidikan',
    title_skills: 'Keahlian & Teknologi',
    title_projects: 'Proyek Unggulan',
    title_contact: 'Hubungi Saya',
    // Contact Section
    contact_desc: 'Jangan ragu untuk terhubung atau bertanya.',
    contact_name: 'Nama Anda',
    contact_email: 'Email Anda',
    contact_message: 'Pesan Anda',
    contact_button: 'Kirim Pesan',
    contact_sending: 'Mengirim...',
    contact_thanks_strong: 'Terima kasih!',
    contact_thanks_span: ' Pesanmu sudah berhasil terkirim.',
    contact_error: 'Gagal mengirim pesan, coba lagi nanti.',
    // Project Section
    project_button: 'Lihat Detail', // <-- TAMBAHKAN INI
    // Footer
    footer_made_with: 'Dibuat dengan',
  },
  // --- Teks Bahasa Inggris ---
  en: {
    // Navbar
    profil: 'Profile',
    pendidikan: 'Education',
    skill: 'Skills',
    proyek: 'Projects',
    kontak: 'Contact',
    // Hero Section
    hero_kicker: 'About Me',
    hero_greeting: 'Hello, I\'m',
    hero_role: 'Web Developer',
    hero_description: 'An Informatics Engineering student focusing on web development and interface design. I turn ideas into functional, engaging, and user-friendly digital products.',
    hero_button: 'Contact Me',
    // Section Titles
    title_education: 'Education History',
    title_skills: 'Skills & Technology',
    title_projects: 'Featured Projects',
    title_contact: 'Get In Touch',
    // Contact Section
    contact_desc: 'Feel free to connect or ask anything.',
    contact_name: 'Your Name',
    contact_email: 'Your Email',
    contact_message: 'Your Message',
    contact_button: 'Send Message',
    contact_sending: 'Sending...',
    contact_thanks_strong: 'Thank you!',
    contact_thanks_span: ' Your message has been sent successfully.',
    contact_error: 'Failed to send message, please try again later.',
    // Project Section
    project_button: 'View Detail', 
    // Footer
    footer_made_with: 'Made with',
  }
};

export const T = computed(() => translations[lang.value]);

export function toggleLanguage() {
  lang.value = lang.value === 'id' ? 'en' : 'id';
}