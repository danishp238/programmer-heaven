<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'

const phrases = [
    ["Create. Explore.", "All in the Coder's Heaven"],

    ["Your Ideas,", "Powered by Coder's Heaven"],

    ["Code Freely,", "With Coder's Heaven Magic!"],

    ["One App,", "Endless Demos."],

    ["Test. Tweak.", "Repeat with Coder's Heaven"],

    ["Less Hassle,", "More Demos."],

    ["Start Simple,", "Build Big with Coder's Heaven"],

    ["Let's Elevate", "With Coder's Heaven"],

    ["Prototype Fast,", "With Coder's Heaven Power"],

    ["Where Code Meets Creativity", "That’s Coder's Heaven!"]
];

const part1 = ref(null)
const part2 = ref(null)
let index = 0
let intervalId

const showNextPhrase = () => {
    const [first, second] = phrases[index]

    part1.value.classList.remove('opacity-100')
    part2.value.classList.remove('opacity-100')
    part1.value.classList.add('opacity-0')
    part2.value.classList.add('opacity-0')

    setTimeout(() => {
        part1.value.textContent = first
        part2.value.textContent = ''

        part1.value.classList.remove('opacity-0')
        part1.value.classList.add('opacity-100')

        setTimeout(() => {
            part2.value.textContent = second
            part2.value.classList.remove('opacity-0')
            part2.value.classList.add('opacity-100')
        }, 500)
    }, 500)

    index = (index + 1) % phrases.length

    setTimeout(() => {
        part1.value.classList.remove('opacity-100')
        part1.value.classList.add('opacity-0')
        part2.value.classList.remove('opacity-100')
        part2.value.classList.add('opacity-0')
    }, 3000)
}

onMounted(() => {
    showNextPhrase()
    intervalId = setInterval(showNextPhrase, 4000)
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <div class="min-h-20">
        <h2 class="font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out"
            ref="part1"></h2>
        <h2 class="font-serif text-center text-xl sm:text-2xl mt-2 opacity-0 transition-opacity duration-700 ease-in-out"
            ref="part2"></h2>
    </div>
</template>