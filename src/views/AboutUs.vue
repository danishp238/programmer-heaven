<template>
    <Header></Header>

  <div class="">
    <!-- Animated background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        v-for="i in 12" 
        :key="i"
        class="absolute rounded-full bg-white/10 backdrop-blur-sm"
        :class="[
          `w-${Math.floor(Math.random() * 20) + 10}`,
          `h-${Math.floor(Math.random() * 20) + 10}`,
          `top-${Math.floor(Math.random() * 100)}`,
          `left-${Math.floor(Math.random() * 100)}`,
          'animate-float'
        ]"
        :style="{
          animationDuration: `${Math.random() * 15 + 10}s`,
          animationDelay: `${Math.random() * 5}s`
        }"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header section -->
      <header 
        class="text-center mb-16"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-pink-300">Our Mission</span>
        </h1>
        <div class="w-24 h-1 bg-white/50 mx-auto mb-8"></div>
        <p class="text-xl text-white/80 max-w-3xl mx-auto">
          We create beautiful, interactive web experiences with modern technologies.
        </p>
      </header>

      <!-- Main content with glass cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Our Story -->
        <div 
          class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="flex items-center mb-6">
            <div class="bg-gradient-to-r from-amber-400 to-pink-500 p-3 rounded-xl mr-4">
              <i class="fas fa-book-open text-white text-xl"></i>
            </div>
            <h2 class="text-2xl font-bold text-white">Our Story</h2>
          </div>
          <p class="text-white/80 mb-6">
            Founded in 2025, we started as a small team passionate about creating stunning UI components and sharing our knowledge with the developer community.
          </p>
          <p class="text-white/80">
            What began as a hobby quickly grew into a platform where we publish tutorials, free components, and design inspiration for developers worldwide.
          </p>
        </div>

        <!-- What We Do -->
        <div 
          class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div class="flex items-center mb-6">
            <div class="bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-xl mr-4">
              <i class="fas fa-code text-white text-xl"></i>
            </div>
            <h2 class="text-2xl font-bold text-white">What We Do</h2>
          </div>
          <p class="text-white/80 mb-6">
            We specialize in creating modern web interfaces using Vue.js, Tailwind CSS, and cutting-edge CSS techniques like glassmorphism, animations, and interactive effects.
          </p>
          <ul class="space-y-3 text-white/80 font-bold">
            <li class="flex items-center">
              ✅ Tutorials on modern UI effects
            </li>
            <li class="flex items-center">
              ✅ Free reusable components
            </li>
            <li class="flex items-center">
              ✅ Design inspiration
            </li>
            <li class="flex items-center">
            ✅ Fully functional javascript-based tutorials
            </li>
          </ul>
        </div>
      </div>

      <!-- Stats section -->
      <!-- <section 
        class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div 
            v-for="stat in stats"
            :key="stat.label"
            class="p-6"
            data-aos="zoom-in"
            :data-aos-delay="stat.delay"
          >
            <div class="text-4xl font-bold text-white mb-2">{{ stat.value }}</div>
            <div class="text-white/70 uppercase text-sm tracking-wider">{{ stat.label }}</div>
          </div>
        </div>
      </section> -->

      <!-- CTA section -->
      <section 
        class="text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Elevate Your UI Skills?</h2>
        <p class="text-white/80 max-w-2xl mx-auto mb-8">
          Join our community of developers creating beautiful, modern interfaces with our tutorials and components.
        </p>
        <router-link :to="'/'">
        <button class="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
          Explore Tutorials
        </button>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RouterLink } from 'vue-router'
import Header from '../components/Header.vue'

// const stats = [
//   { value: '50+', label: 'Tutorials', delay: '0' },
//   { value: '10K+', label: 'Developers', delay: '100' },
//   { value: '100+', label: 'Components', delay: '200' },
//   { value: '24/7', label: 'Support', delay: '300' }
// ]

onMounted(() => {
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-quart'
  })
})
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

.animate-float {
  animation-name: float;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>