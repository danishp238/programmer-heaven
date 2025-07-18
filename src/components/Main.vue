<script setup>
import Typewriter from './Typewriter.vue'
import BlogCard from './BlogCard.vue'
import blogs from '/src/assets/blogs.js'
</script>

<template>
    <main>
        <h1 class="font-serif text-center text-2xl sm:text-3xl mt-6 animate-slide-up animate-delay sm:mt-1">
            Coder's Heaven
        </h1>
        <Typewriter></Typewriter>

        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 mt-12 sm:mt-24 gap-3 text-xl">

                <BlogCard v-for="(blog, index) in blogs" :key="index" :title="blog.title" :description="blog.excerpt"
                    :image="blog.image" :href="`/blog-posts/${blog.slug}`" />
            </div>
        </div>

    </main>
</template>