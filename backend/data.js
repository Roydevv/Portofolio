// backend/data.js

export const data_id = {
  education: [
    { id: 1, institution: 'Universitas Amikom Yogyakarta', major: 'Informatika', period: '2023 - Sekarang' },
    { id: 2, institution: 'Sekolah Menengah Kejuruan AL IMAN 1 Banjar Agung', major: 'Teknik Komputer dan Jaringan', period: '2020 - 2023' },
    { id: 3, institution: 'Madrasah Tsanawiyah AL IMAN Banjar Agung', major: '', period: '2017 - 2020' },
    { id: 4, institution: 'Sekolah Dasar Negeri 01 Ringin Sari', major: '', period: '2011 - 2017' },
  ],
  skills: [
    { name: 'JavaScript', percentage: 53 },
    { name: "Vue.js", percentage: 67 },
    { name: 'Node.js', percentage: 55 },
    { name: 'HTML & CSS', percentage: 80 },
    { name: 'TailwindCSS', percentage: 75 },
    { name: 'Git & GitHub', percentage: 85 },
    { name: 'Figma', percentage: 78 },
    { name: 'MySQL', percentage: 63 },
    { name: 'Flutter', percentage: 35 },
    { name: 'Firebase', percentage: 30 },
  ],
  projects: [
    { 
      title: 'Portofolio Pribadi', 
      description: 'Membangun portofolio pribadi dari awal menggunakan Vue 3, Vite, dan Tailwind CSS.',
      image: '/images/Capture.png', // Ganti dengan path gambarmu
      tech: ['Vue.js', 'Tailwind CSS'],
      link: '#'
    },
    { 
      title: 'Website Toko Sepatu', 
      description: 'Proyek tugas akhir mata kuliah Pemrograman Web, membuat toko online dengan fitur keranjang belanja dan checkout.',
      image: '/images/lucien.jpg', // Ganti dengan path gambarmu
      tech: ['Node.js', 'Express'],
      link: '#'
    },
    { 
      title: 'Aplikasi buku elektronik Cendikia', 
      description: 'Proyek Unit Kegiatan Mahasiswa Amikom Computer Club, membuat tempat membaca berupa E-book dengan fitur chat global dan membership.',
      image: '/images/cendikia.jpg', // Ganti dengan path gambarmu
      tech: ['Node.js', 'Express'],
      link: '#'
    }
  ]
};

export const data_en = {
  education: [
    { id: 1, institution: 'Amikom University Yogyakarta', major: 'Informatics', period: '2023 - Now' },
    { id: 2, institution: 'Vocational School AL IMAN 1 Banjar Agung', major: 'Computer and Network Engineering', period: '2020 - 2023' },
    { id: 3, institution: 'Madrasah Tsanawiyah AL IMAN Banjar Agung', major: '', period: '2017 - 2020' },
    { id: 4, institution: 'State Elementary School 1 Ringin sari', major: '', period: '2011 - 2017' }
  ],
  skills: [ // Data skill mungkin sama, tapi tetap dipisah untuk konsistensi
    { name: 'JavaScript', percentage: 53 },
    { name: "Vue.js", percentage: 67 },
    { name: 'Node.js', percentage: 55 },
    { name: 'HTML & CSS', percentage: 80 },
    { name: 'TailwindCSS', percentage: 75 },
    { name: 'Git & GitHub', percentage: 85 },
    { name: 'Figma', percentage: 78 },
    { name: 'MySQL', percentage: 63 },
    { name: 'Flutter', percentage: 35 },
    { name: 'Firebase', percentage: 30 },
  ],
  projects: [
    { 
      title: 'Personal Portfolio', 
      description: 'Building a personal portfolio from scratch using Vue 3, Vite, and Tailwind CSS.',
      image: '/images/Capture.png',
      tech: ['Vue.js', 'Tailwind CSS'],
      link: '#'
    },
    { 
      title: 'Shoe Store Website', 
      description: 'Final project for Web Programming course, creating an online store with shopping cart and checkout features.',
      image: '/images/lucien.jpg',
      tech: ['Node.js', 'Express'],
      link: '#'
    },
    { 
      title: 'Cendikia E-Book Application', 
      description: 'The Amikom Computer Club Student Activity Unit Project creates a reading place in the form of an e-book with global chat and membership features.',
      image: '/images/cendikia.jpg',
      tech: ['Node.js', 'Express'],
      link: '#'
    }
  ]
};