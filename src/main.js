import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios'

let app = createApp(App)
app.config.globalProperties.$theme = '1';
app.config.globalProperties.$url = 'https://mocki.io/v1/595339ab-d507-4308-a6e2-2538b9a5a98a';
app.use(router).use(VueAxios, axios).mount('#app')

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
        document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description)
    }
    next();
})
