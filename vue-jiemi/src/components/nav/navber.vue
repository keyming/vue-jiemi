<template>
  <div id="navBar">
    <mu-paper class="navBer">
      <mu-bottom-nav class="nav-bar" :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item  @click.native="doAction(0)"  value="movies" title="电影"><i class="iconfont icon-yingshi-yuanwenjian"></i></mu-bottom-nav-item>
        <mu-bottom-nav-item  @click.native="doAction(1)"  value="music" title="音乐" ><i class="iconfont icon-yinle"></i></mu-bottom-nav-item>
        <mu-bottom-nav-item  @click.native="doAction(2)"  value="trip" title="徒步"><i class="iconfont icon-Trekking"></i></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        bottomNav: 'index'
      };
    },
    methods: {
      doAction(index) {
        this.$store.commit('UPDATE_TITLE', this.$route.name);
        this.go(index);
      },
      go(index) {
        switch (index) {
          case 0:
            this.$router.push({
              name: 'movie'
            });
            break;
          case 1:
            this.$router.push({
              name: 'music'
            });
            break;
          case 2:
            this.$router.push({
              name: 'trip'
            });
            break;
        }
      },
      handleChange (value) {
        this.bottomNav = value;
      }
    }
  };
</script>
<style lang="less">
    .nav-bar {
      position: fixed;
      height: 4.3rem;
      left: 0;
      bottom: 0;
      z-index: 1000;
      background: #0086b3;
      .iconfont {
        display: inline-block;
        font-size: 26px
      }
    }
</style>
