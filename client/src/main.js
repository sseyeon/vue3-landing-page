// src/main.js
// fontawesome import
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import vClickOutside from "click-outside-vue3"

library.add(fas, far, fab)

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// Tailwind CSS 전역 스타일 추가
import "./index.css"
const app = createApp(App)

// createApp을 통해 생성한Application 인스턴스의 component API 활용
app.component("font-awesome-icon", FontAwesomeIcon)
// VClickOutside 지시어 전역 등록
app.use(vClickOutside)

app.use(router)
app.mount("#app")
