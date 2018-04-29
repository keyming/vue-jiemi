<template>
  <!-- 过渡动画 -->
  <transition name="fade">
    <div class="img-view" @click="bigImg" v-for="(item, index) in list" :key="index">
      <!-- 遮罩层 -->
      <div class="img-layer"></div>
      <div class="img">
        <img :src="imgSrc[index]">
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['imgSrc[index]'],
    data() {
        return {
          list: [{
            image: '../../static/img/trip/trip1.jpeg',
            title: '爽爽贵阳',
            author: '😄',
            featured: true
          }, {
            image: '../../static/img/trip/trip9.jpeg',
            title: '人民广场',
            author: '夜色贵阳'
          }, {
            image: '../../static/img/trip/trip11.jpeg',
            title: '镇远',
            author: '夜景'
          }, {
            image: '../../static/img/trip/trip4.jpeg',
            title: '黔灵寺',
            author: '风景'
          }, {
            image: '../../static/img/trip/trip5.jpeg',
            title: '人民广场',
            author: '夜景'
          }, {
            image: '../../static/img/trip/trip6.jpeg',
            title: '人民广场',
            author: '🌃',
            featured: true
          }, {
            image: '../../static/img/trip/trip7.jpeg',
            title: 'Vegetables',
            author: 'NUyyyyyyy'
          }, {
            image: '../../static/img/trip/trip8.jpeg',
            title: 'water',
            author: 'TDDyyyyyyy'
          }],
          imgIndex: 0
      };
    },
    methods: {
      bigImg() {
        // 发送事件
        this.$emit('clickit');
      }
    }
  };
</script>
<style lang="less">
  /*动画*/
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
   opacity: 0;
  }
  /*  bigimg  */

  .img-view {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /*遮罩层样式*/
  .img-view .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /*不限制图片大小，实现居中*/
  .img-view .img img {
    max-width: 100%;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1000;
  }
</style>
