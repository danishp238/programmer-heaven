<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
  href: String
});
</script>

<template>
  <div class="w-full animate-slide-up animate-delay border-4 border-emerald-500 rounded-2xl p-5">
    <router-link :to="href">
      <p class="mb-6 cursor-pointer">
        <strong>{{ title }}</strong>
      </p>
    </router-link>

    <router-link :to="href">
      <img :src="image" alt="main image" class="w-full object-cover rounded-3xl hover:brightness-75">
    </router-link>

    <p class="mt-2 sm:mt-1">
      {{ description }}
    </p>

    <router-link :to="href">
      <button class="bg-gradient-to-b from-cyan-300 to-emerald-500 px-6 sm:px-10 py-2 sm:py-3 rounded-2xl mt-3 relative cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="size-6 absolute left-2 top-1/2 transform -translate-y-1/2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        <span class="pl-6">Read More</span>
      </button>
    </router-link>
  </div>
</template>
