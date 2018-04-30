<template>
  <div>
    <v-header></v-header>
    <v-nav-ber></v-nav-ber>
    <router-view></router-view>
  </div>
</template>
<script>
  import vMenu from './components/menu/menus.vue';
  import vHeader from './components/header/header.vue';
  import vNavBer from './components/nav/navber.vue';
  export default {
    name: 'app',
    components: {
      vMenu,
      vHeader,
      vNavBer
    },
    data() {
      return {
        firstShow: true,
        show: false
      };
    },
    methods: {
      isShow() {
        this.show = !this.show;
      },
      hideDetail() {
        this.detailShow = false;
      }
    }
  };
</script>

<style>
</style>
