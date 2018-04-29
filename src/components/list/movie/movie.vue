<template>
  <div class="movie">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="正在热映"></mu-tab>
      <mu-tab value="tab2" title="即将上映"></mu-tab>
      <mu-tab value="tab3"  title="top250"></mu-tab>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <movie-hot></movie-hot>
    </div>
    <div v-if="activeTab === 'tab2'">
      <movie-coming></movie-coming>
    </div>
    <div v-if="activeTab === 'tab3'">
    <movie-top></movie-top>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import movieHot from './movie-hot.vue';
  import movieComing from './movie-coming.vue';
  import movieTop from './movie-top250.vue';
  export default {
    data () {
      return {
        activeTab: 'tab1'
      };
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val;
      },
      handleActive () {
        window.alert('tab active');
      }
    },
    components: {
      movieHot,
      movieComing,
      movieTop
    }
  };
</script>
<style lang="stylus" rel=stylesheet/stylus>
  .movie
    margin-top: 56px;
    width: 100%
</style>
