import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/base.scss'
import '@/assets/theme.scss'
import App from './App.vue'
import router from './router'
import "@/utils/extend"

const app = createApp(App)

app.use(createPinia())

//配置登录拦截
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        //判断是否有标题
        document.title = to.meta.title as string;
    }
    // console.log("title",document.title)
    // 通过requiresAuth判断当前路由导航是否需要登录
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let token = localStorage.getItem('token')
        // console.log("token",token)
        // 若需要登录访问，检查是否为登录状态
        if (!token) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

app.use(router)

app.mount('#app')
