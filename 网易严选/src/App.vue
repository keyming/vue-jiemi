<template>
  <div id="app">
      <header>
        
            <span class="leftIcon" @click="showSlideBar" v-if="slideBar"></span> 
            <span class="closeIcon" @click="closeSlideBar" v-else></span>
            {{title}}
        <!-- 搜索  -->
            <span class="searchIcon"></span>
            <span class="shopCarIcon"></span>
      </header>

    
    <div class="view">
        <router-view></router-view>
    </div>
     <transition
       name="custom-classes-transition"
       enter-active-class="animated slideInDown"
       leave-active-class="animated slideOutUp"
     >
     <nav v-if="quick" class="quickTip">

        <router-link to="/homepage" class="quickLinkTo">
            <div @click="transfrom">
                
                <div class="LinkToInOne LinkToIn">

                </div>
                <p class="router">首页</p>
            </div> 
        </router-link>

        <router-link to="/special" class="quickLinkTo">
            <div @click="transfrom">
            <div class="LinkToInTwo LinkToIn">

            </div>
            <p class="router">专题</p>
        </div> 
        </router-link>

        <router-link to="/classification" class="quickLinkTo">
            <div @click="transfrom">
            <div class="LinkToInThree LinkToIn">

            </div>
            <p class="router">分类</p>
        </div> 
        </router-link>

        <router-link to="/mine" class="quickLinkTo">
             <div  @click="transfrom">
            <div class="LinkToInFour LinkToIn">

            </div>
            <p class="router">个人中心</p>
        </div> 
        </router-link>
      
     </nav>
     
    </transition>

   
  </div>
</template>

<script>
import animate from 'animate.css'//通过这种方式引入animate

//设置html的font-size
(function(window){
		var winW = document.documentElement.clientWidth || document.body.clientWidth;
		document.documentElement.style.fontSize = winW / 10 + "px";
		window.onresize = function(){
			var winW = document.documentElement.clientWidth || document.body.clientWidth;
			document.documentElement.style.fontSize = winW / 10 + "px";
		}
  })(window)
  
export default {
  name: 'app',
  data:function(){
      return {
        //   slidebar控制变量
            slideBar:true,
            title:"网易严选",
            quick:false,
            
      }
  },
  methods:{
      //显示快速导航
    showSlideBar(){
        this.slideBar = !this.slideBar;
        this.quick = !this.quick;
    },
    //隐藏快速导航
    closeSlideBar(){
        this.slideBar = !this.slideBar;
        this.quick = !this.quick;
    },
    transfrom(){
        this.slideBar = !this.slideBar;
        this.quick = !this.quick;
    }
    //获取图片url

  },
  mounted:function(){
      
  }
}
</script>

<style scoped>

@import "../static/css/reset.css"; 
header{
    width: 100%;
    z-index: 999;
    height: 1.2222rem;
    background-color: #fafafa;
    position: fixed;
    border-bottom: 1px solid #eee;
    text-align: center;
    font-size:0.5rem;
    line-height: 1.2222rem;
    z-index: 1000;
}
.leftIcon{
    width: .69444rem;
    height: .69444rem;
    background-color: #fafafa;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png);
    background-repeat: no-repeat;
    background-size: 2.38889rem 9.66667rem;
    vertical-align: middle;
    background-position: 0 -3.52778rem;
    position: absolute;
    left:0.2rem;
    top:0.2rem;
}
.closeIcon{
    width: .69444rem;
    height: .69444rem;
    background-color: #fafafa;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png);
    background-repeat: no-repeat;
    background-size: 2.38889rem 9.66667rem;
    vertical-align: middle;
    background-position: 0 -4.3rem;
    position: absolute;
    left:0.2rem;
    top:0.2rem;
}
.searchIcon{
    width: .69444rem;
    height: .69444rem;
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png) no-repeat -0.1rem -8.03rem;
    background-size: 2.38889rem 9.66667rem;
    position:absolute;
    top: 0.2rem;
    right: 1.4rem;
}
.shopCarIcon{
    width: .69444rem;
    height: .69444rem;
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png) no-repeat -0.1rem -0.07rem;
    background-size: 2.38889rem 9.36667rem;
    position:absolute;
    top: 0.2rem;
    right: 0.4rem;
}

/*快速导航  */
.quickTip{
    position: fixed;
    top:1.2222rem;
    z-index: 999;
    width: 100%;
    display: flex;
    font-size: .33333rem;
    background-color: #fafafa;
    padding: .25rem 0;
    height: 2.41667rem;
}
.quickTip .quickLinkTo{
    flex-grow: 1;
    color: #666;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.LinkToIn{
    width: 1rem;
    height: 0.8rem;
    margin: 0.3rem auto 0.1rem;
}
.LinkToInOne{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png) no-repeat 0.1rem -1.9rem;
    background-size: 2.78889rem 10.16667rem;
}
.LinkToInTwo{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png) no-repeat 0.1rem -9.4rem;
    background-size: 2.78889rem 10.16667rem;
}
.LinkToInThree{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png) no-repeat 0.1rem -1rem;
    background-size: 2.78889rem 10.16667rem;
}
.LinkToInFour{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-se821dcaa2b-0c6f5b5106.png) no-repeat 0.1rem -7.4rem;
    background-size: 2.78889rem 10.16667rem;
}

 .view{
    width: 100%;
    padding-top:1.2222rem;
    background: #ccc;
} 

</style>
