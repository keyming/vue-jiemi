<template>
  <div class="menus">
      <div class="menu-wrapper" :class="{'show': show}">
        <div class="menu-name">
          <div class="logo"><img class="headShow" src="http://b13.photo.store.qq.com/psu?/651200367/XWfcolSOKntOllMl5rtWqYrChvU6gxI9LrMGSeus9qs!/b/Yd.F0wdkZwAAYsrszgdDaAAA&bo=DwHxAAAAAAABEMg!&rf=viewer_4"></div>
          <div class="name">陸東明</div>
        </div>
        <div class="menu-list">
          <div v-for='(menu,index) in nav' :key="index" @click="updateHeader(NAME_ITEM[menu], menu)">
            <router-link class="menu-item iconfont item border-1px" :to="menu">
              <div class="icon">
                <i class="iconfont " :class="'icon-'+ menu"></i>
              </div>
              <span class="text">{{NAME_ITEM[menu]}}</span>
              <div class="menu-new">
              </div>
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  const NAME_ITEM = { 'basic': '个人资料' };
  export default {
    name: 'menus',
    props: {
      show: {
        type: Boolean
      }
    },
    data() {
      return {
        NAME_ITEM: NAME_ITEM
      };
    },
    computed: {
      ...mapState([
        'nav', 'nav'
      ])
    },
    methods: {
      updateHeader(title, menu) {
        this.$store.commit('UPDATE_TITLE', title);
        this.$store.commit('UPDATE_MENUSHOW');
        if (menu === 'basic') {
          this.$store.commit('UPDATE_NAV');
        }
      }
    }
  };
</script>
<style lang="less">
  .menu-wrapper {
    position: fixed;
    flex: 0 0 250px;
    width: 250px;
    top: 0;
    bottom: 0;
    left: -250px;
    background: #666666;
    z-index: 200;
    transition: all 0.4s ease;
    .menu-name {
      display: inline-block;
      height: 180px;
      text-align: center;
      .logo {
        display: inline-block;
        height: 60px;
        .headShow {
          width: 40%;
          height: auto;
          border-radius: 50%;
          margin: 20px 70px;
      }
      }
      .name {
        font-size: 20px;
        font-weight: 700;
        color: #f7f7f7;
        text-align: center;
      }
    }
    &.show {
      transform: translateX(250px)
    }
    .menu-list {
      margin: 0;
      padding: 0;
      .menu-item {
        display: block;
        font-size: 16px;
        padding: 12px 13px;
        line-height: 15px;
        color: #ffecec;
        .icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          text-indent: 5px;
          background: #404040;
          vertical-align: top;
          text-align: center;
          .iconfont {
            color: #ffecec;
            line-height: 32px;
          }
        }
        .text {
          display: inline-block;
          vertical-align: top;
          font-size: 16px;
          line-height: 30px;
          margin-left: 12px;
        }
      }
    }
  }
</style>
