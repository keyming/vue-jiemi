<template>
  <div class="cartcontrol">
    <!--外层动画-->
    <transition name="move">
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
  </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>
<script>
  // import（输入） 英破的
  import Vue from 'vue';
  // export(输出) x破的 default(未履行 蒂佛的)
  export default {
    // props(道具) 破皮
    props: {
      food: {
        type: Object
      }
    },
    methods: { // methods(方法) 玛莎曲
      addCart(event) { // cart(运货马车) 卡德
        // event(事件)伊万的
        if (!event._constructed) {
           return false;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        // emit(出发)英迈的 event.target(事件,目标)伊万的 踏勘的
        this.$emit('increment', event.target);
      },
      // decrease(减少) 蒂科夫瑞
      decreaseCart(event) {
        // event(事件)伊万的 constructed(构造) 坑烦的
        if (!event._constructed) {
          return false;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      font-size: 24px
      line-height: 24px
      padding: 6px
      opacity: 1
      transform: translate3d(0,0,0)
      .inner
        display: inline-block
        font-size: 24px
        line-height: 24px
        color: rgb(0, 160, 222)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      padding-top: 6px
      width: 12px
      font-size: 10px
      text-align: center
      line-height: 24px
      color: rgb(160, 153, 157)
    .cart-add
      display: inline-block
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 222)
      padding: 6px
</style>
