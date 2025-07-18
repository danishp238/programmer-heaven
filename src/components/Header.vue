<script setup>
</script>

<template>
    <header>
        <nav class="flex items-center justify-between animate-slide-up animate-delay">
            <div class="w-20 relative left-5 sm:left-5 sm:w-32">
                <router-link :to="'/'">
                    <img src="/images/logo.jpeg"
                        class="cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out"
                        alt="Logo">
                </router-link>
                    

            </div>
            <div class="flex justify-between w-36 sm:w-48 relative right-3 sm:right-6">
                <router-link :to="'/about-us'">
                    <p class="cursor-pointer">About Us</p>
                </router-link>
                <router-link :to="'/contact-us'">
                    <p class="cursor-pointer">Contact</p>
                </router-link>
            </div>
        </nav>
    </header>
</template>