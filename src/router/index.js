import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import BlogPage from '../views/BlogPage.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'

NProgress.configure({ showSpinner: false })


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on route change
    return { top: 0 }
  },
    routes: [
        {
            path: '/',
            name: "index",
            component: Index
        },

        {
            path: '/blog-posts/:slug',
            name: 'blog',
            component: BlogPage
        },

        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },

        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
        }
    ]
})

// Show progress on route change start
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// Hide progress when route is done
router.afterEach(() => {
  NProgress.done()
})

export default router