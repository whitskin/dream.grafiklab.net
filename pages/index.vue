<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50 relative overflow-hidden">
    <!-- Sol alt köşede hafif bluerple gradient -->
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_bottom_left,rgba(114,137,218,0.15)_0%,rgba(24,24,27,0)_70%)] blur-2xl"></div>
    
    <!-- Navbar -->
    <header class="fixed w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
      <nav class="container mx-auto px-4 h-14 flex items-center justify-between">
        <h1 class="text-lg font-semibold tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 text-transparent bg-clip-text">Dream41</h1>
        <ul class="flex gap-4">
          <li v-for="item in navItems" :key="item.href">
            <NuxtLink
              :to="item.href"
              class="text-sm text-zinc-400 hover:text-zinc-50 transition-colors relative group"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-400 group-hover:w-full transition-all duration-300"></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Hero -->
    <section class="min-h-screen flex items-center justify-center flex-col text-center pt-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0)_0%,rgba(24,24,27,0.8)_100%)]"></div>
      <div class="space-y-6 relative z-10">
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-slide-in bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 text-transparent bg-clip-text">
          Dream41
        </h2>
        <p class="text-zinc-400 text-lg sm:text-xl max-w-[750px] mx-auto animate-slide-in animate-delay-100">
          Crafting cutting-edge web applications as a full-stack developer with a passion for excellence.
        </p>
        <NuxtLink
          to="#projects"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-zinc-950 bg-zinc-50 text-zinc-900 hover:bg-zinc-200 h-10 py-2 px-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] animate-slide-in animate-delay-200"
        >
          Explore My Work
        </NuxtLink>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-20 relative">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.2)_0%,rgba(24,24,27,0)_50%)]"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold tracking-tighter mb-8 text-center animate-slide-in bg-gradient-to-r from-zinc-100 to-zinc-300 text-transparent bg-clip-text">Selected Projects</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="group rounded-xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm p-1 animate-slide-in hover:border-zinc-700/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(24,24,27,0.2)]"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="h-48 rounded-lg bg-cover bg-center relative overflow-hidden" :style="{ backgroundImage: `url(${project.image})` }">
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            <div class="p-4">
              <h3 class="font-semibold mb-2 bg-gradient-to-r from-zinc-100 to-zinc-300 text-transparent bg-clip-text">{{ project.title }}</h3>
              <p class="text-sm text-zinc-400 mb-4">{{ project.description }}</p>
              <NuxtLink
                :to="project.link"
                target="_blank"
                class="text-sm text-zinc-400 hover:text-zinc-50 transition-colors inline-flex items-center gap-2 group/link"
              >
                View Project
                <span class="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950 relative">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.2)_0%,rgba(24,24,27,0)_70%)]"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold tracking-tighter mb-8 text-center animate-slide-in bg-gradient-to-r from-zinc-100 to-zinc-300 text-transparent bg-clip-text">Expertise</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="flex items-center gap-4 p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm animate-slide-in hover:border-zinc-700/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(24,24,27,0.2)]"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <img :src="skill.icon" :alt="skill.name" class="w-8 h-8" />
            <span class="text-sm font-medium text-zinc-300">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20 relative">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(24,24,27,0.2)_0%,rgba(24,24,27,0)_50%)]"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl font-bold tracking-tighter mb-4 animate-slide-in bg-gradient-to-r from-zinc-100 to-zinc-300 text-transparent bg-clip-text">Let's Connect</h2>
        <p class="text-zinc-400 mb-8 animate-slide-in animate-delay-100">
          Reach out via your preferred platform to discuss projects or collaborations.
        </p>
        <div class="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            v-for="(contact, index) in contacts"
            :key="index"
            :href="contact.link"
            class="flex flex-col items-center p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(24,24,27,0.2)] animate-slide-in"
            :style="{ animationDelay: `${(index + 1) * 100}ms` }"
            target="_blank"
            rel="noopener noreferrer"
          >
            <component
              v-if="contact.iconComponent"
              :is="contact.iconComponent"
              class="w-6 h-6 mb-2 text-zinc-400"
            />
            <div
              v-else
              class="w-6 h-6 mb-2 text-zinc-400"
              v-html="contact.icon"
            ></div>
            <h3 class="font-medium mb-1 text-zinc-200">{{ contact.name }}</h3>
            <p class="text-sm text-zinc-400">{{ contact.handle }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 border-t border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm">
      <div class="container mx-auto px-4 text-center text-sm text-zinc-400">
        © 2025 Dream41. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/24/solid';

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
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Nuxt / Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'Nextjs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Postgresql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>`,
  },
  {
    name: 'GitHub',
    handle: '@whitskin',
    link: 'https://github.com/whitskin',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>`,
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
  transform: translateY(20px);
  animation: slideIn 0.5s ease-out forwards;
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