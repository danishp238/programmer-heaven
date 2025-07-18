<template>
    <Header></Header>
    <div class="font-serif py-12 px-4 sm:px-6 lg:px-8">
        <!-- Animated background elements -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
            <div v-for="i in 12" :key="i" class="absolute rounded-full bg-white/10 backdrop-blur-sm" :class="[
                `w-${Math.floor(Math.random() * 20) + 10}`,
                `h-${Math.floor(Math.random() * 20) + 10}`,
                `top-${Math.floor(Math.random() * 100)}`,
                `left-${Math.floor(Math.random() * 100)}`,
                'animate-float'
            ]" :style="{
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
        }"></div>
        </div>

        <div class="max-w-4xl mx-auto relative z-10">
            <!-- Header section -->
            <header class="text-center mb-16" data-aos="fade-down" data-aos-duration="800">
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
                    Let's <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-pink-300">Connect</span>
                </h1>
                <div class="w-24 h-1 bg-white/50 mx-auto mb-8"></div>
                <p class="text-xl text-white/80 max-w-3xl mx-auto">
                    Whether you need help, have ideas, or just want to chat about frontend magic
                </p>
            </header>

            <!-- Reasons to contact -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" data-aos="fade-up">
                <div v-for="(reason, index) in contactReasons" :key="index"
                    class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:border-white/40 transition-all duration-300">
                    <div class="flex items-start mb-4">
                        <div class="bg-gradient-to-r from-purple-400 to-pink-500 p-2 rounded-lg mr-4">
                            <i :class="`fas fa-${reason.icon} text-white text-lg`"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white">{{ reason.title }}</h3>
                    </div>
                    <p class="text-white/80">{{ reason.description }}</p>
                </div>
            </div>

            <!-- Contact options -->
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-16"
                data-aos="zoom-in">
                <h2 class="text-2xl font-bold text-white mb-8 text-center">
                    Choose Your Preferred <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Contact
                        Method</span>
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Email option -->
                    <div
                        class="bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-white/20 p-3 rounded-lg mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>



                            </div>
                            <h3 class="text-xl font-bold text-white">Email Us</h3>
                        </div>
                        <p class="text-white/80 mb-6">
                            Perfect for detailed questions, code reviews, or project discussions. We typically respond
                            within 24 hours.
                        </p>
                        <div class="bg-black/20 rounded-lg p-4 border border-white/10">
                            <div class="flex items-center justify-between">
                                <span class="text-white font-mono">example@gmail.com</span>
                                <button @click="copyToClipboard('example@gmail.com')"
                                    class="text-white/70 hover:text-white transition-colors">
                                    <i class="far fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Discord option -->
                    <div
                        class="bg-gradient-to-br from-indigo-600/30 to-blue-600/30 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-white/20 p-3 rounded-lg mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" class="w-6 h-6 text-white fill-current">
  <path d="M107.42 8.52A105.15 105.15 0 0082.4 1a72.26 72.26 0 00-3.48 7.16 97.2 97.2 0 00-29.59 0A72.26 72.26 0 0045.85 1 105.2 105.2 0 0020.83 8.53 110.54 110.54 0 00.5 89.53a105.7 105.7 0 0031.47 15.83 76.47 76.47 0 006.53-10.64 67.82 67.82 0 01-10.33-5 89.13 89.13 0 007.7-6.16c15.07 7.11 31.35 7.11 46.27 0a89.13 89.13 0 007.7 6.16 67.82 67.82 0 01-10.33 5 76.54 76.54 0 006.53 10.64 105.75 105.75 0 0031.47-15.83 110.61 110.61 0 00-20.92-81zm-65.17 62.7c-5.66 0-10.34-5.19-10.34-11.54s4.58-11.54 10.34-11.54 10.41 5.25 10.34 11.54c0 6.35-4.58 11.54-10.34 11.54zm42.64 0c-5.66 0-10.34-5.19-10.34-11.54s4.58-11.54 10.34-11.54S95.1 53.33 95 59.68c0 6.35-4.58 11.54-10.34 11.54z"/>
</svg>

                            </div>
                            <h3 class="text-xl font-bold text-white">Reach us on Discord</h3>
                        </div>
                        <p class="text-white/80 mb-6">
                            Great for quick questions, live discussions, and community support. Our most responsive
                            channel.
                        </p>
                        <div class="bg-black/20 rounded-lg p-4 border border-white/10">
                            <div class="flex items-center justify-between">
                                <span class="text-white font-mono">professional_gamer20</span>
                                <button @click="copyToClipboard('professional_gamer20')"
                                    class="text-white/70 hover:text-white transition-colors">
                                    <i class="far fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ section -->
            <div class="mb-16" data-aos="fade-up">
                <h2 class="text-2xl font-bold text-white mb-8 text-center">
                    Before You <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Reach
                        Out</span>
                </h2>

                <div class="space-y-4">
                    <div v-for="(faq, index) in faqs" :key="index"
                        class="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
                        <button class="flex items-center justify-between w-full text-left" @click="toggleFAQ(index)">
                            <h3 class="text-lg font-medium text-white">{{ faq.question }}</h3>
                            <i
                                :class="`fas fa-chevron-${activeFAQ === index ? 'up' : 'down'} text-white/50 transition-transform duration-300`"></i>
                        </button>
                        <div class="overflow-hidden transition-all duration-300" :style="{
                            maxHeight: activeFAQ === index ? '200px' : '0px',
                            marginTop: activeFAQ === index ? '12px' : '0px'
                        }">
                            <p class="text-white/70">{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header.vue'

const contactReasons = [
    {
        icon: 'code',
        title: 'Stuck on Code?',
        description: 'Get help debugging, optimizing, or understanding tricky concepts in your projects.'
    },
    {
        icon: 'lightbulb',
        title: 'Project Ideas',
        description: 'Discuss potential projects, get feedback, or brainstorm new features.'
    },
    {
        icon: 'graduation-cap',
        title: 'Learning Guidance',
        description: 'Need advice on learning paths, resources, or career direction in frontend?'
    },
    {
        icon: 'rocket',
        title: 'Feature Suggestions',
        description: 'Have ideas for new tutorials or components you\'d like to see? We\'re all ears!'
    }
]

const faqs = [
    {
        question: 'How quickly can I expect a response?',
        answer: 'Email responses typically come within 24 hours, while Discord messages are usually answered within a few hours during our active times (9AM-6PM UTC).'
    },
    {
        question: 'Do you offer paid consulting or development?',
        answer: 'Yes! For extensive projects or dedicated support, we offer consulting services. Contact us with your requirements.'
    },
    {
        question: 'Where can I find your free components?',
        answer: 'All our free components are available in the end of each tutorial with detailed documentation for every chunk and live demos.'
    }
]

const activeFAQ = ref(null)
const showToast = ref(false)
const toastMessage = ref('')

const toggleFAQ = (index) => {
    activeFAQ.value = activeFAQ.value === index ? null : index
}

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toastMessage.value = `Copied: ${text}`
    showToast.value = true
    setTimeout(() => {
        showToast.value = false
    }, 3000)
}

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