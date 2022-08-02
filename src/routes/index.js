import { createRouter , createWebHashHistory } from 'vue-router'
import Home from './Home.vue'

export default createRouter({

  history: createWebHashHistory(),

  routes: [
    {
      path: '/',      // 메인페이지로 접근  
      component: Home   // 해당 페이지 컴포넌트 실행
    }
  ]

})