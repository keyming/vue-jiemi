<template>
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-demo">
      <mu-grid-tile v-for="(tile,index) in list" :key="index" @click="select(index)" :class="{big: index===selectIndex}" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
        <img :src="tile.image"/>
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle">by<b>{{tile.author}}</b></span>
      </mu-grid-tile>
    </mu-grid-list>
  </div>
</template>
<script>
  import BigImg from './bigImg.vue';
  export default {
    data() {
      return {
        list: [{
        image: '../../dist/static/img/trip/trip1.jpeg',
        title: '爽爽贵阳',
        author: '😄',
        featured: true
      }, {
        image: '../../dist/static/img/trip/trip9.jpeg',
        title: '人民广场',
        author: '夜色贵阳'
      }, {
        image: '../../dist/static/img/trip/trip11.jpeg',
        title: '镇远',
        author: '夜景'
      }, {
        image: '../../dist/static/img/trip/trip4.jpeg',
        title: '黔灵寺',
        author: '风景'
      }, {
        image: '../../dist/static/img/trip/trip5.jpeg',
        title: '人民广场',
        author: '夜景'
      }, {
        image: '../../dist/static/img/trip/trip6.jpeg',
        title: '人民广场',
        author: '🌃',
        featured: true
      }, {
        image: '../../dist/static/img/trip/trip7.jpeg',
        title: '走走',
        author: '点点滴滴'
      }, {
        image: '../../dist/static/img/trip/trip8.jpeg',
        title: '走走',
        author: '点点滴滴'
      }],
        isImgViewsShow: 0,
        imgViewsSrc: '',
        selectIndex: undefined
      };
    },
    props: [{}],
    components: {
       'big-img': BigImg
    },
    methods: {
      select(index) {
        this.index = index;
        this.$store.commit('UPDATE_LOADING', true);
        this.selectIndex = this.selectIndex === index ? undefined : index;
      }
    }
  };
</script>
<style scoped lang="scss">
  .gridlist-demo-container {
    display: flex;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 660px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .gridlist-demo {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>
