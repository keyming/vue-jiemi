<template>
  <div class="menus">
      <div class="menu-wrapper" :class="{'show': show}">
        <div class="menu-name">
          <div class="logo"><img class="headShow" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1525296820947&amp;di=33f4c84d522119af1bfe6f530441e6c4&amp;imgtype=0&amp;src=http%3A%2F%2Fpic31.photophoto.cn%2F20140412%2F0005018628799426_b.jpg"></div>
          <div class="name">LuDongMing</div>
        </div>
        <div class="menu-list">
          <div v-for='(menu,index) in nav' :key="index" @click="updateHeader(NAME_ITEM[menu], menu)">
            <div class="menu-item iconfont item border-1px">
              <div class="icon">
                <i class="icon-tubiaozhizuomoban iconfont"></i>
              </div>
              <span class="text"><a href="https://github.com/keyming/vue-jiemi/tree/master/vue-jiemi">githubDemo</a></span>
              <div class="menu-new">
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  const NAME_ITEM = { 'basic': '个人Demo' };
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
          .iconfont{
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
          a {
            color: #ffecec;
          }
        }
      }
    }
  }
</style>
