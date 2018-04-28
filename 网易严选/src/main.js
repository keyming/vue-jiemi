// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import Vuerouter from "vue-router"
import Vueresource from "vue-resource"
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'//引入轮播图组件


//引入组件
import homepage from "./pages/homePage.vue"
import jujia from "./pages/homeLink/jujia.vue"

import jujia_inner from "./pages/homeLink/jujia_in/jujia_inner.vue"

import canchu from "./pages/homeLink/canchu.vue"
import peijian from "./pages/homeLink/peijian.vue"
import fuzhuang from "./pages/homeLink/fuzhuang.vue"
import gengduo from "./pages/homeLink/gengduo.vue"
import special from "./pages/special.vue"
import classification from "./pages/classification.vue"
import mine from "./pages/mine.vue"
//console.log(homepage)

require('swiper/dist/css/swiper.css')
Vue.use(Vuerouter);
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper);
Vue.use(Vueresource);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading:"../static/images/shoe.png",
  attempt: 1
})



const routes = [ //3.定义路由映射
    { path: '/', component: homepage },
    { path: '/homepage', component: homepage ,
        // children:[
        //   {path:'/homepage/other',component:fuzhuang}
        // ]
  },
    { path: '/jujia', component: jujia ,
       children:[
         { path: '/jujia/:path', component: jujia_inner }
        ]  
  },
    { path: '/canchu', component: canchu },
    { path: '/peijian', component: peijian },
    { path: '/fuzhuang', component: fuzhuang },
    { path: '/gengduo', component: gengduo },
    { path: '/special', component: special},
    { path: '/classification', component: classification},
     { path: '/mine', component: mine},
    
];

const router = new Vuerouter({//4.路由实例化
    routes // routes: routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
