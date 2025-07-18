<script setup>
import { onMounted, ref, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from "../components/Header.vue"
import { initPuzzleGame } from "/src/scripts/puzzle-exporter.js"
import { initIconsHover } from "/src/scripts/icons.js"
import { initMatterjs } from "/src/scripts/matterjs.js"
import blogs from '/src/assets/blogs.js'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug)

// Find the current blog (includes related)
function findBlogBySlug(slug) {
  for (const blog of blogs) {
    if (blog.slug === slug) return blog
    const match = blog.related?.find(r => r.slug === slug)
    if (match) return match
  }
  return null
}

const blog = computed(() => findBlogBySlug(slug.value))
const htmlContainer = ref(null)

const moreBlogs = computed(() =>
  blogs.filter(b => b.slug !== blog.value?.slug).slice(0, 3)
)

// ✅ Trigger script setup on slug change
let observerCleanup = null;

function runBlogScripts() {
  nextTick(() => {
    const currentSlug = blog.value?.slug;
    if (!htmlContainer.value) return;

    // Remove any previously attached scripts
    htmlContainer.value.querySelectorAll('script').forEach(s => s.remove());

    // Setup internal navigation handler
    const attachInternalNavigation = () => {
      htmlContainer.value.querySelectorAll('[data-router-link]').forEach(el => {
        el.addEventListener('click', (e) => {
          const target = e.currentTarget.getAttribute('data-router-link');
          if (target) {
            e.preventDefault();
            router.push(target);
          }
        }, { once: true });
      });
    };

    attachInternalNavigation();

    // Clean up previous observer if exists
    if (observerCleanup) observerCleanup();

    // Observe future DOM changes inside htmlContainer
    const observer = new MutationObserver(() => {
      attachInternalNavigation();
    });

    observer.observe(htmlContainer.value, {
      childList: true,
      subtree: true,
    });

    // Save cleanup reference
    observerCleanup = () => observer.disconnect();

    // Custom script loading
    if (currentSlug?.startsWith('drag-and-drop-puzzle-game')) {
      initPuzzleGame();
    } else if (currentSlug === 'awesome-matterjs-design') {
      initMatterjs();
    } else if (currentSlug === 'icons-hover-effect') {
      initIconsHover();
    }
  });
}

// 🔁 Re-run everything when route slug changes
watch(() => slug.value, () => {
  runBlogScripts()
})

// Initial mount
onMounted(() => {
  runBlogScripts()
})
</script>

<template>
  <Header></Header>

  <div v-if="blog" class="">
    <h1 class="text-center text-xl sm:text-3xl mt-8 px-4">{{ blog.title }}</h1>

    <div class="mt-10">
      <h2 class="text-center text-md sm:text-3xl mt-8 px-4">Live Demo</h2>
      <div v-html="blog.demo"></div>
    </div>

    <div class="text-lg w-1/2 mx-auto" v-html="blog.content" ref="htmlContainer"></div>
  </div>

  <div v-else class="text-center py-24 text-2xl">
    Blog not found.
  </div>

  <div class="mt-20 border-t border-white/20 pt-10">
  <h2 class="text-2xl font-semibold text-white text-center mb-6">Read More</h2>

  <div class="space-y-8 max-w-3xl mx-auto px-4">
    <div
      v-for="more in moreBlogs"
      :key="more.slug"
      class="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
      @click="router.push({ name: 'BlogPage', params: { slug: more.slug } })"
    >
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <img
          :src="more.image"
          alt="blog image"
          class="w-full sm:w-36 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 class="text-lg font-bold text-white">{{ more.title }}</h3>
          <p class="text-sm text-white/80 mt-1">{{ more.excerpt }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
