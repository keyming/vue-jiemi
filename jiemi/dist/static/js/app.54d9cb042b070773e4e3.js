webpackJsonp([0],{0:function(t,s){},"0J+d":function(t,s){},"34KM":function(t,s){},"5u3g":function(t,s){},"A+Vf":function(t,s){},KXPh:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i=e("/ocq"),n=e("8+8L"),r={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})}))},staticRenderFns:[]};var l=e("VU/8")(r,o,!1,function(t){e("flkO")},null,null).exports,c={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},components:{star:l}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟到达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:t.hideDetail}})])])])],1)},staticRenderFns:[]};var u={data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){t.seller=s.body.data},function(t){console.log(t)})},components:{"v-header":e("VU/8")(c,d,!1,function(t){e("A+Vf")},null,null).exports}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("好嘛")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]};var p=e("VU/8")(u,v,!1,function(t){e("KXPh")},null,null).exports,h=e("GQaK"),f={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[]}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"¥"+this.minPrice:this.totalPrice<this.minPrice?"¥"+(this.minPrice-this.totalPrice)+"起送":"去结算吧"}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeDrop:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var a=e.el.getBoundingClientRect(),i=a.left-32,n=-(window.innerHeight-a.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+i+"px,0,0)",r.style.transform="translate3d("+i+"px,0,0)"}}},dropping:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",s)})},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper",class:{extra:t.totalCount>0}},[e("div",{staticClass:"logo",class:{extra:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price"},[t._v(t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v(t._s(t.deliveryPrice))])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay"},[t._v(t._s(t.payDesc))])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,a){return e("div",{key:a},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}))])])},staticRenderFns:[]};var C=e("VU/8")(f,_,!1,function(t){e("0J+d")},null,null).exports,m={props:{food:{type:Object}},methods:{addCart:function(t){if(!t._constructed)return!1;this.food.count?this.food.count++:a.a.set(this.food,"count",1),this.$emit("increment",t.target)},decreaseCart:function(t){if(!t._constructed)return!1;this.food.count&&this.food.count--}}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:t.decreaseCart}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:t.addCart}})],1)},staticRenderFns:[]};var g=e("VU/8")(m,w,!1,function(t){e("V5E9")},null,null).exports,y={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("/api/goods").then(function(s){t.goods=s.body.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodswrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},incrementTotal:function(t){this.$refs.shopcart.drop(t)},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},_initScroll:function(){var t=this;this.meunScroll=new h.a(this.$refs.menuwrapper,{click:!0}),this.foodsScroll=new h.a(this.$refs.foodswrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodswrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},components:{shopCart:C,cartControl:g}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuwrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){t.selectMenu(a)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodswrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,a){return e("li",{key:a,staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartControl",{attrs:{food:s},on:{increment:t.incrementTotal}})],1)])])}))])}))]),t._v(" "),e("shopCart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)},staticRenderFns:[]};var k=e("VU/8")(y,b,!1,function(t){e("kAzs")},null,null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  aadda\n")])},staticRenderFns:[]};var E=e("VU/8")({},x,!1,function(t){e("fKbi")},null,null).exports,$={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sta"},[this._v("\n  哈哈哈哈哈哈\n")])},staticRenderFns:[]};var P=e("VU/8")({},$,!1,function(t){e("5u3g")},null,null).exports;e("34KM");a.a.use(i.a),a.a.use(n.a);var F=[{path:"/goods",component:k},{path:"/seller",component:E},{path:"/ratings",component:P}],N=new i.a({routes:F,linkActiveClass:"active"});new a.a({router:N,render:function(t){return t(p)}}).$mount("#app")},V5E9:function(t,s){},fKbi:function(t,s){},flkO:function(t,s){},kAzs:function(t,s){}},["NHnr"]);