<template>
  <div id="header">
    <header class="title" :class="{'show': menuShow}" @click="isShow">
      <header class="bar bar-nav">
        <div class="bar-left">
          <span class="iconfont icon-hengpai"></span>
        </div>
        <div class="title">{{headerTitle}}</div>
        <div class="bar-right">
          <span class="iconfont icon-sousuo_sousuo"></span>
        </div>
      </header>
    </header>
    <v-menu :show="menuShow"></v-menu>
    </div>
</template>

<script type="text/ecmascript-6">
  import vMenu from '../menu/menus.vue';
  import {mapState} from 'vuex';
  export default {
    name: 'header',
    components: {
      vMenu
    },
    data() {
      return {
       show: false
      };
    },
    computed: {
      ...mapState([
      'headerTitle', 'menuShow'
      ])
    },
    methods: {
      isShow() {
        this.$store.commit('UPDATE_MENUSHOW');
      },
      hideDetail() {
        this.detailShow = false;
      }
    }
  };
</script>
<style lang="less">
  .title {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    font-size: 0;
    transition: all 0.4s ease;
    z-index: 200;
    &.show {
      transform: translateX(200px);
    }
    .bar {
      display: inline-block;
      text-align: center;
      height: 3.8rem;
      line-height: 3.8rem;
      width: 100%;
      background: #0086b3;
      .bar-left,.bar-right {
        display: inline-block;
        position: absolute;
      }
        .bar-left {
          font-size: 1rem;
          left: 1.5rem;
          .iconfont {
          font-size: 1rem;
          color: #fff;
          }
        }
        .title {
          display: inline-block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #f7f7f7;
        }
        .bar-right {
          font-size: 2.8rem;
          right: 30px;
          .iconfont {
          font-size: 28px;
          color: #ccc;
        }
        }
    }
  }
</style>
