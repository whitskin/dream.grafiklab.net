<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute -bottom-40 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>

    <!-- Enhanced gradient overlay -->
    <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15)_0%,rgba(15,23,42,0)_70%)] blur-3xl"></div>

    <!-- Navbar -->
    <header class="fixed w-full z-50 border-b border-slate-800/30 bg-slate-950/95 backdrop-blur-xl transition-all duration-500">
      <nav class="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <!-- Logo Section -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span class="text-white font-bold text-sm sm:text-lg">D</span>
          </div>
          <h1 class="text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-100 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Dream41
          </h1>
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex gap-8">
          <li v-for="item in navItems" :key="item.href">
            <NuxtLink
              :to="item.href"
              class="text-sm font-medium text-slate-300 hover:text-slate-50 transition-all duration-300 relative group px-4 py-2 rounded-lg hover:bg-slate-800/50"
              @click="closeMobileMenu"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-8 transition-all duration-300"></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden relative w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center transition-all duration-300 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          :class="{ 'bg-slate-700/70': isMobileMenuOpen }"
        >
          <div class="w-5 h-5 flex flex-col justify-center items-center">
            <span 
              class="block w-4 h-0.5 bg-slate-300 transition-all duration-300 transform"
              :class="isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'"
            ></span>
            <span 
              class="block w-4 h-0.5 bg-slate-300 transition-all duration-300"
              :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span 
              class="block w-4 h-0.5 bg-slate-300 transition-all duration-300 transform"
              :class="isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'"
            ></span>
          </div>
        </button>
      </nav>

      <!-- Mobile Menu Overlay -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
          @click="closeMobileMenu"
        ></div>
      </Transition>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        leave-active-class="transition-transform duration-300 ease-in"
        enter-from-class="transform translate-x-full"
        enter-to-class="transform translate-x-0"
        leave-from-class="transform translate-x-0"
        leave-to-class="transform translate-x-full"
      >
        <div 
          v-if="isMobileMenuOpen"
          class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-800/50 z-50 md:hidden"
        >
          <!-- Mobile Menu Header -->
          <div class="flex items-center justify-between p-6 border-b border-slate-800/50">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span class="text-white font-bold text-sm">D</span>
              </div>
              <span class="text-lg font-bold bg-gradient-to-r from-slate-100 to-blue-400 text-transparent bg-clip-text">
                Dream41
              </span>
            </div>
            <button
              @click="closeMobileMenu"
              class="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu Items -->
          <div class="p-6">
            <ul class="space-y-4">
              <li v-for="item in navItems" :key="item.href">
                <NuxtLink
                  :to="item.href"
                  @click="closeMobileMenu"
                  class="group flex items-center justify-between w-full p-4 rounded-xl text-slate-300 hover:text-slate-50 hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-slate-700/50"
                >
                  <span class="text-base font-medium">{{ item.label }}</span>
                  <svg class="w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 text-slate-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </NuxtLink>
              </li>
            </ul>

            <!-- Mobile Menu Footer -->
            <div class="mt-8 pt-6 border-t border-slate-800/50">
              <div class="flex items-center justify-center space-x-4">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-sm text-slate-400">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center flex-col text-center pt-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0%,rgba(15,23,42,0.8)_100%)]"></div>
      
      <div class="space-y-12 relative z-10 max-w-6xl mx-auto px-6">
        <!-- Animated greeting -->
        <div class="inline-flex items-center px-6 py-3 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
          <span class="text-slate-300 text-sm font-medium">Available for new opportunities</span>
        </div>

        <div class="space-y-8">
          <h2 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span class="bg-gradient-to-r from-slate-100 via-blue-300 to-purple-300 text-transparent bg-clip-text block">
              Dream41
            </span>
          </h2>
          
          <div class="space-y-6">
            <p class="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Hello, I'm Dream41 — a passionate <span class="text-blue-400 font-medium">full stack developer</span> with a deep interest in building modern, scalable web applications. I enjoy turning creative ideas into clean, efficient code.
            </p>
            <p class="text-slate-400 text-lg max-w-3xl mx-auto">
              Always learning, always improving — let's create something remarkable together.
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NuxtLink
            to="#projects"
            class="group relative inline-flex items-center justify-center rounded-2xl text-base font-semibold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-slate-950 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 h-14 py-4 px-12 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105"
          >
            <span class="relative z-10">Explore My Work</span>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </NuxtLink>
          
          <NuxtLink
            to="#contact"
            class="inline-flex items-center justify-center rounded-2xl text-base font-semibold transition-all duration-300 border-2 border-slate-700 hover:border-slate-600 text-slate-300 hover:text-slate-100 h-14 py-4 px-12 hover:bg-slate-800/50 backdrop-blur-sm"
          >
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-32 relative" ref="projectsSectionRef">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.3)_0%,rgba(15,23,42,0)_60%)]"></div>
      <div class="relative z-10">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="inline-flex items-center px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm mb-8">
              <span class="text-slate-300 text-sm font-medium">Featured Work</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-slate-100 to-blue-300 text-transparent bg-clip-text">
              Projects
            </h2>
            <p class="text-slate-400 text-xl max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>
        </div>

        <!-- Horizontal Scrolling Projects -->
        <div class="overflow-x-auto scrollbar-hide" ref="projectsContainerRef">
          <div class="flex gap-8 px-6 pb-4" style="width: max-content;">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="group relative rounded-3xl border border-slate-800/50 bg-gradient-to-br from-slate-900/70 to-slate-800/30 backdrop-blur-xl p-2 transition-all duration-700 hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] flex-shrink-0 w-96"
            >
              <!-- Project Image -->
              <div class="relative h-64 rounded-2xl bg-cover bg-center overflow-hidden" :style="{ backgroundImage: `url(${project.image})` }">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div class="absolute top-4 right-4">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <!-- Project Content -->
              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-bold text-xl bg-gradient-to-r from-slate-100 to-blue-300 text-transparent bg-clip-text">
                    {{ project.title }}
                  </h3>
                  <div class="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
                
                <p class="text-slate-400 mb-6 leading-relaxed">{{ project.description }}</p>
                
                <NuxtLink
                  :to="project.link"
                  target="_blank"
                  class="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-all duration-300 font-medium group/link"
                >
                  <span>View Project</span>
                  <svg class="w-4 h-4 transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="flex justify-center mt-8">
          <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l4-4m0 0l4-4m-4 4v12"></path>
            </svg>
            <span class="text-slate-400 text-sm">Scroll horizontally to explore</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-32 bg-gradient-to-b from-slate-900/50 to-slate-950/50 relative" ref="skillsSectionRef">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.3)_0%,rgba(15,23,42,0)_70%)]"></div>
      <div class="relative z-10">
        <div class="container mx-auto px-6">
          <div class="text-center mb-20">
            <div class="inline-flex items-center px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm mb-8">
              <span class="text-slate-300 text-sm font-medium">Technical Skills</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-slate-100 to-blue-300 text-transparent bg-clip-text">
              Expertise
            </h2>
            <p class="text-slate-400 text-xl max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </div>

        <!-- Horizontal Scrolling Skills -->
        <div class="overflow-x-auto scrollbar-hide" ref="skillsContainerRef">
          <div class="flex gap-6 px-6 pb-4" style="width: max-content;">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="group relative flex flex-col items-center p-8 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/70 to-slate-800/30 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] flex-shrink-0 w-48"
            >
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-700/50 transition-colors duration-300">
                  <img :src="skill.icon" :alt="skill.name" class="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <span class="text-sm font-semibold text-slate-200 text-center group-hover:text-blue-300 transition-colors duration-300">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="flex justify-center mt-8">
          <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l4-4m0 0l4-4m-4 4v12"></path>
            </svg>
            <span class="text-slate-400 text-sm">Scroll horizontally to see all skills</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 relative">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.3)_0%,rgba(15,23,42,0)_60%)]"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="inline-flex items-center px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm mb-8">
            <span class="text-slate-300 text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 class="text-5xl md:text-6xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-slate-100 to-blue-300 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          
          <p class="text-slate-300 mb-16 text-xl leading-relaxed max-w-2xl mx-auto">
            Reach out to discuss innovative projects or potential collaborations. I'm always excited to work on something amazing.
          </p>

          <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              v-for="(contact, index) in contacts"
              :key="index"
              :href="contact.link"
              class="group relative flex flex-col items-center p-8 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/70 to-slate-800/30 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors duration-300">
                  <component
                    v-if="contact.iconComponent"
                    :is="contact.iconComponent"
                    class="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  />
                  <svg
                    v-else
                    class="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path v-if="contact.name === 'Discord'" d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                    <path v-else-if="contact.name === 'GitHub'" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63.06 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </div>
              </div>
              
              <h3 class="font-semibold text-xl mb-3 text-slate-200 group-hover:text-blue-300 transition-colors duration-300">
                {{ contact.name }}
              </h3>
              <p class="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {{ contact.handle }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-slate-800/30 bg-gradient-to-b from-slate-900/50 to-slate-950/50 backdrop-blur-xl relative">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center space-x-4 mb-4 md:mb-0">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span class="text-white font-bold text-sm">D</span>
            </div>
            <span class="text-slate-400 text-sm">© 2025 Dream41. All rights reserved.</span>
          </div>
          <div class="flex items-center space-x-6">
            <span class="text-slate-500 text-sm">Built with passion and precision</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/24/solid';
import { useHead } from '#app';

// Refs for DOM elements
const projectsSectionRef = ref(null);
const projectsContainerRef = ref(null);
const skillsSectionRef = ref(null);
const skillsContainerRef = ref(null);

// Navigation items
const navItems = [
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

// Project data
const projects = [
  {
    title: 'GrafikLab.NET',
    description: 'A dynamic web platform built with PHP and Laravel for seamless user experiences.',
    link: 'https://grafiklab.net',
    image: '/images/grafiklab.png',
  },
];

// Skills data
const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Nuxt / Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

// Contact data
const contacts = [
  {
    name: 'Discord',
    handle: '@dream41',
    link: 'https://discord.com/users/1147956655384956978',
  },
  {
    name: 'Email',
    handle: 'dream41.net@gmail.com',
    link: 'mailto:dream41.net@gmail.com',
    iconComponent: EnvelopeIcon,
  },
  {
    name: 'GitHub',
    handle: '@dream41-net',
    link: 'https://github.com/dream41-net',
  },
];

// Mobile menu state
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Body scroll lock when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
});

// Clean up on unmount
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = '';
  }
});

// Mouse wheel horizontal scroll functionality
const handleWheel = (container, e) => {
  if (container.value) {
    e.preventDefault();
    container.value.scrollLeft += e.deltaY;
  }
};

const isOverHorizontalSection = (e) => {
  const projectsRect = projectsSectionRef.value?.getBoundingClientRect();
  const skillsRect = skillsSectionRef.value?.getBoundingClientRect();
  
  const mouseY = e.clientY;
  
  return (
    (projectsRect && mouseY >= projectsRect.top && mouseY <= projectsRect.bottom) ||
    (skillsRect && mouseY >= skillsRect.top && mouseY <= skillsRect.bottom)
  );
};

const globalWheelHandler = (e) => {
  if (!isOverHorizontalSection(e)) return;
  
  const projectsRect = projectsSectionRef.value?.getBoundingClientRect();
  const skillsRect = skillsSectionRef.value?.getBoundingClientRect();
  
  if (projectsRect && e.clientY >= projectsRect.top && e.clientY <= projectsRect.bottom) {
    handleWheel(projectsContainerRef, e);
  } else if (skillsRect && e.clientY >= skillsRect.top && e.clientY <= skillsRect.bottom) {
    handleWheel(skillsContainerRef, e);
  }
};

// Lifecycle hooks
onMounted(() => {
  if (process.client) {
    window.addEventListener('wheel', globalWheelHandler, { passive: false });
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('wheel', globalWheelHandler);
    document.body.style.overflow = '';
  }
});

defineOgImage({     
  component: 'BlogPost', 
  props: {       
    title: 'Dream41',       
    description: `Hello, I'm Dream41 — a passionate full stack developer with a deep interest in building modern, scalable web applications. I enjoy turning creative ideas into clean, efficient code. Always learning, always improving — let's create something remarkable together.`,    
  },   
});

// SEO and metadata
useHead({
  title: 'Dream41 | Full-Stack Developer Portfolio',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Dream41' },
    { name: 'theme-color', content: '#3B82F6' },
    { name: 'description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern web applications.' },
    { name: 'og:title', content: 'Dream41 | Full-Stack Developer Portfolio' },
    { name: 'og:description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern web applications.' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://dream.grafiklab.net' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
    { rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/avatars/1147956655384956978/a_b05c99a6bc6eae33af22831d6e41341b.png?size=4096' },
  ],
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Smooth horizontal scrolling */
.overflow-x-auto {
  scroll-behavior: smooth;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>