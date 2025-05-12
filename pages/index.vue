<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <!-- Navbar -->
    <header class="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-extrabold tracking-tight text-indigo-400">Dream41</h1>
        <ul class="flex gap-6">
          <li v-for="item in navItems" :key="item.href">
            <NuxtLink
              :to="item.href"
              class="text-gray-300 hover:text-indigo-400 font-medium tracking-wide transition-colors duration-300"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Hero -->
    <section class="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-gray-900 to-gray-800 pt-20">
      <h2 class="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-slide-in">
        Dream41
      </h2>
      <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-in animate-delay-100">
        Crafting cutting-edge web applications as a full-stack developer with a passion for excellence.
      </p>
      <NuxtLink
        to="#projects"
        class="mt-8 inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold tracking-wide hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-in animate-delay-200"
      >
        Explore My Work
      </NuxtLink>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center animate-slide-in">Selected Projects</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="relative group bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 animate-slide-in"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="h-56 bg-cover bg-center relative" :style="{ backgroundImage: `url(${project.image})` }">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 mb-4">{{ project.description }}</p>
              <NuxtLink
                :to="project.link"
                target="_blank"
                class="text-indigo-400 hover:text-indigo-300 font-medium tracking-wide transition-colors duration-300"
              >
                View Project
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center animate-slide-in">Expertise</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="flex flex-col items-center p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-4" />
            <span class="text-gray-200 font-medium tracking-wide">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6 animate-slide-in">Let's Connect</h2>
        <p class="text-lg text-gray-300 mb-12 animate-slide-in animate-delay-100">
          Reach out via your preferred platform to discuss projects or collaborations.
        </p>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            v-for="(contact, index) in contacts"
            :key="index"
            :href="contact.link"
            class="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in"
            :style="{ animationDelay: `${(index + 1) * 100}ms` }"
            target="_blank"
            rel="noopener noreferrer"
          >
            <component
              v-if="contact.iconComponent"
              :is="contact.iconComponent"
              class="w-12 h-12 mb-4 text-indigo-400"
            />
            <div
              v-else
              class="w-12 h-12 mb-4 text-indigo-400"
              v-html="contact.icon"
            ></div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ contact.name }}</h3>
            <p class="text-gray-400">{{ contact.handle }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 bg-gray-800 text-center text-sm text-gray-400">
      © 2025 Dream41. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { CodeBracketIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';

// Navigation items (compact and professional)
const navItems = [
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

// Project data with premium placeholder images
const projects = [
  {
    title: 'GrafikLab.NET',
    description: 'GrafikLab.NET My web site project php laravel.',
    link: 'https://grafiklab.net',
    image: '/images/grafiklab.png',
  },
  {
    title: 'FunMac.com.tr',
    description: 'FunMac.com.tr Nextjs react blog project.',
    link: 'https://funmac.com.tr',
    image: '/images/funmac.png',
  },
];

// Skills with high-quality icons
const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Nuxt / Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

// Contact data with custom Discord SVG and Heroicons
const contacts = [
  {
    name: 'Discord',
    handle: '@dream41',
    link: 'https://discord.com/users/1147956655384956978',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>`,
  },
  {
    name: 'GitHub',
    handle: '@whitskin',
    link: 'https://github.com/whitskin',
    iconComponent: CodeBracketIcon,
  },
  {
    name: 'Email',
    handle: 'info@grafiklab.net',
    link: 'mailto:info@grafiklab.net',
    iconComponent: EnvelopeIcon,
  },
];

// SEO and metadata
useHead({
  title: 'Dream41 | Full-Stack Developer Portfolio',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Dream41' },
    { name: 'theme-color', content: '#2196F3' },
    { name: 'description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern web applications.' },
    { name: 'og:title', content: 'Dream41 | Full-Stack Developer Portfolio' },
    { name: 'og:description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern web applications.' },
    { name: 'og:image', content: 'https://cdn.discordapp.com/avatars/1147956655384956978/a_b05c99a6bc6eae33af22831d6e41341b.png?size=4096' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://dream.grafiklab.net' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap' },
    { rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/avatars/1147956655384956978/a_b05c99a6bc6eae33af22831d6e41341b.png?size=4096' },
  ],
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.animate-slide-in {
  opacity: 0;
  transform: translateY(30px);
  animation: slideIn 0.8s ease-out forwards;
}

.animate-delay-100 {
  animation-delay: 100ms;
}

.animate-delay-200 {
  animation-delay: 200ms;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>