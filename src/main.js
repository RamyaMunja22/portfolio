import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/variables.css'
import './assets/css/global.css'
import './assets/css/navbar.css'
import './assets/css/hero.css'
import './assets/css/responsive.css'
import './assets/css/about.css'
import './assets/css/skills.css'
import './assets/css/projects.css'
import './assets/css/experience.css'
import './assets/css/achievements.css'
import './assets/css/contact.css'
import './assets/css/footer.css'

createApp(App)
    .use(router)
    .mount('#app')