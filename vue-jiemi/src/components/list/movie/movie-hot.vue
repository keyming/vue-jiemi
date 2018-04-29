<template>
    <section id="movie" ref="menuwrapper">
      <div class="movie-container">
        <div class="movie-list" v-for="(movie, index) in movies" :key="index">
          <div class="icon">
            <img class="show-img" :src="movie.images.medium"/>
          </div>
          <div class="text">
            <h1>{{movie.title}}</h1>
          </div>
        </div>
      </div>
    </section>
</template>
<script type="text/ecmascript-6">
  import {getHot} from '../../../api/slider';
  import BScroll from 'better-scroll';
  export default {
    name: 'movie',
    data() {
      return {
        movies: []
      };
    },
    created() {
      this._getMovies();
      this._intScroll();
    },
    methods: {
      _getMovies() {
        var _this = this;
        getHot().then(function(res) {
          _this.movies = res.subjects;
          console.log(_this.movies);
        });
      },
      _intScroll() {
        this.meunScroll = new BScroll(this.$refs.menuwrapper, {
          click: true
        });
      }
    }
  };
</script>
<style lang="less">
  #movie {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 660px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    overflow-y: scroll;
    z-index: 0;
    .movie-container {
      clear: both;
      overflow: hidden;
      background: #fff;
      border-radius: 1rem;
      padding: 1.4rem;
      .movie-list {
        float: left;
        box-sizing: border-box;
        width: 33.33333%;
        padding-left: 4%;
        padding-right: 4%;
        margin-bottom: 0;
        overflow: hidden;
        text-decoration: none;
        color: #9b9b9b;
        .icon {
          min-height: 7.7rem;
          overflow: hidden;
          position: relative;
          &:before {
            content: "";
            display: block;
            padding-top: 143%;
          }
          .img-show {
            width: 100%;
          }
        }
        .text {
          height: 4.5rem;
          overflow: hidden;
          h1 {
            font-size: 1.3rem;
            font-weight: normal;
            color: #7e8c8d;
            text-align: center;
            overflow: hidden;
            margin: 0;
          }
        }
      }
      img {
        display: block;
        position: absolute;
        left: -100%;
        right: -100%;
        top: -100%;
        bottom: -100%;
        margin: auto;
        min-height: 100%;
        min-width: 100%;
      }
    }
  }
</style>
