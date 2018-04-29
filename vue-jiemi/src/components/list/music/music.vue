<template>
  <div class="music">
    <div class="music-content">
      <div class="music-slider">
        <div  v-if="slider.length" class="slider-wrapper">
          <slider>
            <div v-for="(item, index) in slider" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
      </div>
      <div class="music-list" ref="wrapper">
        <mu-sub-header>巅峰榜·新歌</mu-sub-header>
        <mu-list v-for="(item, index) in list" :key="index">
          <mu-list-item>{{item.data.albumname}}
            <mu-avatar :src='"http://imgcache.qq.com/music/photo/album_300/"+(item.data.albumid%100)+"/300_albumpic_"+item.data.albumid+"_0.jpg"'  slot="leftAvatar"></mu-avatar>
            <span>{{item.data.singer[0].name}}</span>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slider from './slider';
  import {getSlider, getList} from '../../../api/slider';
  import {ERR_OK} from '../../../api/config';
  export default {
    name: 'music',
    data() {
      return {
        slider: [],
        list: []
      };
    },
    created() {
      this._getSlider();
      this._getList();
    },
    methods: {
      _getSlider() {
        getSlider().then((res) => {
          if (res.code === ERR_OK) {
            this.slider = res.data.slider;
          }
        });
      },
      _getList() {
        getList().then((res) => {
          if (res.code === ERR_OK) {
            this.list = res.songlist;
          }
        });
      }
    },
    components: {
      Slider
    }
  };
</script>
<style lang="less">
  .music {
    display: flex;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 660px;
    top: 3.6rem;
    bottom: 0;
    overflow: hidden;
    .music-content {
      height: 100%;
      overflow: hidden;
      .music-slider {
      z-index: 0;
      position: relative;
      width: 100%;
      overflow: hidden
    }
    }
  }

</style>
