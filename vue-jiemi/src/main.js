
import Vue from 'vue';
import store from './components/vuex/store';
import App from './App';
import router from './router';
import infiniteScroll from 'vue-infinite-scroll'; // 引入滑动模块
import './common/css/index.styl';
import '../static/fonts/iconfont.css';
import VueResource from 'vue-resource';
import MuseUi from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-carbon.css';

Vue.use(VueResource);
Vue.use(MuseUi);
Vue.use(infiniteScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
