// backend/data.js

export const data_id = {
  education: [
    { id: 1, institution: 'Universitas Amikom Yogyakarta', major: 'Informatika', period: '2023 - Sekarang' },
    { id: 2, institution: 'Sekolah Menengah Atas Budhaya 2 Santo Agustinus', major: 'Teknik Komputer dan Jaringan', period: '2020 - 2023' },
    { id: 3, institution: 'Sekolah Menengah Pertama 32 Jakarta', major: '', period: '2017 - 2020' },
    { id: 4, institution: 'Sekolah Dasar Harvard', major: '', period: '2011 - 2017' },
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
      title: 'Website Game Token ABC TopUp', 
      description: 'Proyek tugas akhir mata kuliah Pemrograman Web, membuat website topup all game online dan murchaindise, dilengkapi dengan sistem pembayaran 24 jam cepat dan flexsible .',
      image: '/images/ABC TopUp.png', // Ganti dengan path gambarmu
      tech: ['Node.js', 'Express'],
      link: '#'
    },
    { 
      title: 'Akun Bisnis Sosial Media', 
      description: 'Profil Bisnis Sewa Mobil Yogyakarta yang saya bangun bersama rekan dan senior, membuat konten dan edukasi seputar perjalanan wisata Yogyakarta.',
      image: '/images/Joerental.png', // Ganti dengan path gambarmu
      tech: ['Node.js', 'Express'],
      link: '#'
    }
  ]
};

export const data_en = {
  education: [
    { id: 1, institution: 'Amikom University Yogyakarta', major: 'Informatics', period: '2023 - Now' },
    { id: 2, institution: 'Vocational School Budhaya 2 Santo Agustinus', major: 'Computer and Network Engineering', period: '2020 - 2023' },
    { id: 3, institution: 'Junior High School 32 jakarta', major: '', period: '2017 - 2020' },
    { id: 4, institution: 'Harvard Elementary School', major: '', period: '2011 - 2017' }
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
      title: 'ABC TopUp Game Token Website', 
      description: 'Final project for the Web Programming course, creating a top-up website for all online games and merchandise, equipped with a fast and flexible 24-hour payment system.',
      image: '/images/lucien.jpg',
      tech: ['Node.js', 'Express'],
      link: '#'
    },
    { 
      title: 'Social Media Business Accounts', 
      description: 'Yogyakarta Car Rental Business Profile that I built with colleagues and seniors, creating content and education about Yogyakarta tourism trips.',
      image: '/images/joerental.png',
      tech: ['Node.js', 'Express'],
      link: '#'
    }
  ]
};