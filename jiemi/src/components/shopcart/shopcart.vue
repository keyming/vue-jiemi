<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper" :class="{'extra': totalCount>0}">
          <div class="logo" :class="{'extra': totalCount>0}">
            <i class="icon-shopping_cart"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price">{{totalPrice}}</div>
        <div class="desc">{{deliveryPrice}}</div>
      </div>
      <div class="content-right">
        <div class="pay">{{payDesc}}</div>
      </div>
      <div class="ball-container">
        <div v-for="(ball, index) in balls" :key="index">
          <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  // export(输出)x破的 default(未履行 蒂佛的)
  export default {
    // props(道具 破皮)
    props: {
      // selectFoods(选择 粮食)斯懒
      selectFoods: {
        // array（欧瑞）
        type: Array,
        default() {
          return [];
        }
      },
      // deliveryPrice(传递 价格) 德勒福瑞 不碍事
      deliveryPrice: {
        // type(类型) 特普 o
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    // data(数据) 忒的
    data() {
      return {
        balls: [
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false}
          ],
          dropBalls: []
      };
    },
    // computed计算(康飙的)
    computed: {
      // totalPrice(总计 价格) 豆豆 不碍事
      totalPrice () {
        // let(允许) 勒 total(豆豆)
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount () {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `¥${this.minPrice}`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `¥${diff}起送`;
        } else {
          return '去结算吧';
        }
      }
    },
    // methods(方法 玛莎曲)
    methods: {
      drop(el) {
        // 触发一次事件就会将所有小球进行遍历
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) { // 将false的小球放到dropBalls
            ball.show = true;
            ball.el = el; // 设置小球的el属性为一个dom对象
            this.dropBalls.push(ball);
            return;
          }
        }
      },

      beforeDrop(el) { // 这个方法的执行是因为这是一个vue的监听事件
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect(); // 获取小球的相对于视口的位移(小球高度)
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22); // 负数,因为是从左上角往下的的方向
            el.style.display = ''; // 清空display
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            // 处理内层动画
            let inner = el.getElementsByClassName('inner-hook')[0]; // 使用inner-hook类来单纯被js操作
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },

      dropping(el, done) { // 这个方法的执行是因为这是一个vue的监听事件
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight; // 触发重绘html
        this.$nextTick(() => { // 让动画效果异步执行,提高性能
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          // 处理内层动画
          let inner = el.getElementsByClassName('inner-hook')[0]; // 使用inner-hook类来单纯被js操作
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done); // Vue为了知道过渡的完成，必须设置相应的事件监听器。
        });
      },

      afterDrop(el) { // 这个方法的执行是因为这是一个vue的监听事件
        let ball = this.dropBalls.shift(); // 完成一次动画就删除一个dropBalls的小球
        if (ball) {
          ball.show = false;
          el.style.display = 'none'; // 隐藏小球
        }
      }
    }
  };
</script>
<style lang="stylus" rel=stylesheet/stylus>
  // background(背景 白狗安)
  // font-size (font字体 凤) size大小(晒死)
  // color(颜色) 卡拉
  // line-height line(线条 莱) height(身高 海德)
  // text-align:center (text 文本 泰克斯) align(排对其 艾莱) center(中心 盛德)
  // vertical-align:top (vertical 垂直的 瓦提狗) (top 顶部 拖布)
  // margin-top: (margin (边缘，范围) 马群)
  // box-sizing: (box(盒) 博克斯) sizing(分选)赛新
  // padding-right: (padding (衬垫) 帕丁) (right 向右 外的)
  // font-weight: (weight(重量) 韦德)
  // border(边界 博得)
  // logo-wrapper (logo 喽狗，wrapper(封套)挖补)
  // display:inline-boclick (display(显示) 的士不累)
  // position: relative (position (位置)坡瑞讯 relative(相对的) 瓦乐德芙)
  // left （向左）拉福德
  // bottom(底部) 波等
  // border-radius(border 边界) 博得 radius(半径) 瑞蒂s
  // position: fixed position(位置 波瑞讯) fixed（固定的）肺死的
  .shopcart
    // position(位置) 破瑞讯 fixed(固定的)肥斯的
    position: fixed
    // left(向左) 勒夫的
    left: 0
    // bottom:0(底部) 波等
    bottom: 0
    // height(身高) 海德
    height: 46px
    // width(宽度 位置)
    width: 100%
    .content
      display: flex
      font-size: 0
      background: #141b27
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          vertical-align: top
          top: -10px
          margin: 0 12px
          padding: 6px
          height: 56px
          width: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141b27
          &.extra
            background: aqua
          .logo
            display: inline-block
            // verlical(垂直) 瓦提狗
            vertical-align: top
            height: 100%
            width: 100%
            // text-align:center(文本 对其 中心) 泰克斯 艾莱 盛德
            text-align: center
            // border(边界)博得 radius(瑞蒂斯)
            border-radius: 50%
            background: #7e8c8d
            &.extra
              background: yellow
            .icon-shopping_cart
              font-size: 24px
              line-height: 44px
              color:rgba(7, 17, 27, 0.4)
          .num
            display: inline-block
            vertical-align: top
            position: absolute
            text-align: center
            top: 0
            right: 0
            width: 26px
            height: 17px
            line-height: 17px
            background: #7e8c8d
            color: #fff
            font-size: 10px
            border-radius: 50%
        .price
          display: inline-block
          margin-top: 12px
          font-size: 20px
          font-weight: 700
          color: #fff
          line-height: 24px
          border-right: 1px solid #7e8c8d
          padding-right: 12px

        .desc
          display: inline-block
          margin: 12px
          font-size: 10px
          color: #fff
      .content-right
        flex: 0 0 108px
        width: 108px
        .pay
          display: inline-block
          height: 46px
          line-height: 46px
          width: 100%
          font-size: 12px
          color: #fff
          background: red
          text-align: center
    .ball-container
      .ball
        position: fixed //小球动画必须脱离html布局流
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: rgb(0, 160, 220)
          transition: all 0.4s linear
</style>
