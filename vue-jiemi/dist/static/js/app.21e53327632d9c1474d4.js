webpackJsonp([1],{0:function(t,e){},"1/J3":function(t,e){},"5W1Z":function(t,e){},"6L/X":function(t,e){},DXmm:function(t,e){},E51W:function(t,e){},EKwk:function(t,e){},GAcz:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};i.d(n,"incrementCounter",function(){return r});var s={};i.d(s,"getHeaderTitle",function(){return c});var a=i("/5sW"),o=i("NYxO"),r=function(t){t.dispatch,t.state};function c(t){return t.headerTitle}a.default.use(o.a);var l={headerTitle:"电影",menus:["movie","music","trip"],nav:["basic"],menuShow:!1,loadingShow:!1,news:5},u={UPDATE_TITLE:function(t,e){console.log(e),t.headerTitle=e},UPDATE_MENUSHOW:function(t){t.menuShow=!t.menuShow},UPDATE_LOADING:function(t,e){t.loadingShow=e},UPDATE_NEWS:function(t){t.news=0},UPDATE_NAV:function(t){t.nav=0}},m=new o.a.Store({state:l,mutations:u,actions:n,getters:s}),d=i("Dd8w"),v=i.n(d),h={basic:"个人资料"},f={name:"menus",props:{show:{type:Boolean}},data:function(){return{NAME_ITEM:h}},computed:v()({},Object(o.b)(["nav","nav"])),methods:{updateHeader:function(t,e){this.$store.commit("UPDATE_TITLE",t),this.$store.commit("UPDATE_MENUSHOW"),"basic"===e&&this.$store.commit("UPDATE_NAV")}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menus"},[i("div",{staticClass:"menu-wrapper",class:{show:t.show}},[t._m(0),t._v(" "),i("div",{staticClass:"menu-list"},t._l(t.nav,function(e,n){return i("div",{key:n,on:{click:function(i){t.updateHeader(t.NAME_ITEM[e],e)}}},[i("router-link",{staticClass:"menu-item iconfont item border-1px",attrs:{to:e}},[i("div",{staticClass:"icon"},[i("i",{staticClass:"iconfont ",class:"icon-"+e})]),t._v(" "),i("span",{staticClass:"text"},[t._v(t._s(t.NAME_ITEM[e]))]),t._v(" "),i("div",{staticClass:"menu-new"})])],1)}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-name"},[e("div",{staticClass:"logo"},[e("img",{staticClass:"headShow",attrs:{src:"http://b13.photo.store.qq.com/psu?/651200367/XWfcolSOKntOllMl5rtWqYrChvU6gxI9LrMGSeus9qs!/b/Yd.F0wdkZwAAYsrszgdDaAAA&bo=DwHxAAAAAAABEMg!&rf=viewer_4"}})]),this._v(" "),e("div",{staticClass:"name"},[this._v("陸東明")])])}]};var _=i("VU/8")(f,p,!1,function(t){i("OfoF")},null,null).exports,g={name:"header",components:{vMenu:_},data:function(){return{show:!1}},computed:v()({},Object(o.b)(["headerTitle","menuShow"])),methods:{isShow:function(){this.$store.commit("UPDATE_MENUSHOW")},hideDetail:function(){this.detailShow=!1}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"header"}},[i("header",{staticClass:"title",class:{show:t.menuShow},on:{click:t.isShow}},[i("header",{staticClass:"bar bar-nav"},[t._m(0),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(t.headerTitle))]),t._v(" "),t._m(1)])]),t._v(" "),i("v-menu",{attrs:{show:t.menuShow}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bar-left"},[e("span",{staticClass:"iconfont icon-hengpai"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bar-right"},[e("span",{staticClass:"iconfont icon-sousuo_sousuo"})])}]};var w=i("VU/8")(g,b,!1,function(t){i("EKwk")},null,null).exports,C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"navbar"}},[i("mu-paper",[i("mu-bottom-nav",{staticClass:"nav-bar",attrs:{value:t.bottomNav,shift:""},on:{change:t.handleChange}},[i("mu-bottom-nav-item",{attrs:{value:"movies",title:"电影"},nativeOn:{click:function(e){t.doAction(0)}}},[i("i",{staticClass:"iconfont icon-yingshi-yuanwenjian"})]),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:"music",title:"音乐"},nativeOn:{click:function(e){t.doAction(1)}}},[i("i",{staticClass:"iconfont icon-yinle"})]),t._v(" "),i("mu-bottom-nav-item",{attrs:{value:"trip",title:"徒步"},nativeOn:{click:function(e){t.doAction(2)}}},[i("i",{staticClass:"iconfont icon-Trekking"})])],1)],1)],1)},staticRenderFns:[]};var y={name:"app",components:{vMenu:_,vHeader:w,vNavBer:i("VU/8")({data:function(){return{bottomNav:"index"}},methods:{doAction:function(t){this.$store.commit("UPDATE_TITLE",this.$route.name),this.go(t)},go:function(t){switch(t){case 0:this.$router.push({name:"movie"});break;case 1:this.$router.push({name:"music"});break;case 2:this.$router.push({name:"trip"})}},handleChange:function(t){this.bottomNav=t}}},C,!1,function(t){i("krVB")},null,null).exports},data:function(){return{firstShow:!0,show:!1}},methods:{isShow:function(){this.show=!this.show},hideDetail:function(){this.detailShow=!1}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-header"),this._v(" "),e("v-nav-ber"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var T=i("VU/8")(y,E,!1,function(t){i("R7B+")},null,null).exports,A=i("/ocq"),S=i("woOf"),x=i.n(S),k=i("//Fk"),U=i.n(k),$=i("hU7x"),N=i.n($);function j(t,e,i){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var e="";for(var i in t){var n=void 0!==t[i]?t[i]:"";e+="&"+i+"="+encodeURIComponent(n)}return e?e.substring(1):""}(e),new U.a(function(e,n){N()(t,i,function(t,i){t?n(t):e(i)})})}var D={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},V={param:"jsonpCallback"};var M=i("GQaK"),O={name:"movie",data:function(){return{movies:[]}},created:function(){this._getMovies(),this._intScroll()},methods:{_getMovies:function(){var t=this;j("https://api.douban.com/v2/movie/in_theaters",{start:0,count:100}).then(function(e){t.movies=e.subjects,console.log(t.movies)})},_intScroll:function(){this.meunScroll=new M.a(this.$refs.menuwrapper,{click:!0})}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{ref:"menuwrapper",attrs:{id:"movie"}},[i("div",{staticClass:"movie-container"},t._l(t.movies,function(e,n){return i("div",{key:n,staticClass:"movie-list"},[i("div",{staticClass:"icon"},[i("img",{staticClass:"show-img",attrs:{src:e.images.medium}})]),t._v(" "),i("div",{staticClass:"text"},[i("h1",[t._v(t._s(e.title))])])])}))])},staticRenderFns:[]};var W={name:"movie",data:function(){return{movies:[]}},created:function(){this._getMovies()},methods:{_getMovies:function(){var t=this;j("https://api.douban.com/v2/movie/coming_soon",{start:0,count:100}).then(function(e){t.movies=e.subjects,console.log(t.movies)})}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"movie"}},[i("div",{staticClass:"movie-container"},t._l(t.movies,function(e,n){return i("div",{key:n,staticClass:"movie-list"},[i("div",{staticClass:"icon"},[i("img",{staticClass:"show-img",attrs:{src:e.images.medium}})]),t._v(" "),i("div",{staticClass:"text"},[i("h1",[t._v(t._s(e.title))])])])}))])},staticRenderFns:[]};var P={name:"movie",data:function(){return{movies:[]}},created:function(){this._getMovies()},methods:{_getMovies:function(){var t=this;j("https://api.douban.com/v2/movie/top250",{start:0,count:100}).then(function(e){t.movies=e.subjects,console.log(t.movies)})}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"movie"}},[i("div",{staticClass:"movie-container"},t._l(t.movies,function(e,n){return i("div",{key:n,staticClass:"movie-list"},[i("div",{staticClass:"icon"},[i("img",{staticClass:"show-img",attrs:{src:e.images.medium}})]),t._v(" "),i("div",{staticClass:"text"},[i("h1",[t._v(t._s(e.title))])])])}))])},staticRenderFns:[]};var q={data:function(){return{activeTab:"tab1"}},methods:{handleTabChange:function(t){this.activeTab=t},handleActive:function(){window.alert("tab active")}},components:{movieHot:i("VU/8")(O,I,!1,function(t){i("yZ7V")},null,null).exports,movieComing:i("VU/8")(W,F,!1,function(t){i("n9Nd")},null,null).exports,movieTop:i("VU/8")(P,R,!1,function(t){i("6L/X")},null,null).exports}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie"},[i("mu-tabs",{attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[i("mu-tab",{attrs:{value:"tab1",title:"正在热映"}}),t._v(" "),i("mu-tab",{attrs:{value:"tab2",title:"即将上映"}}),t._v(" "),i("mu-tab",{attrs:{value:"tab3",title:"top250"}})],1),t._v(" "),"tab1"===t.activeTab?i("div",[i("movie-hot")],1):t._e(),t._v(" "),"tab2"===t.activeTab?i("div",[i("movie-coming")],1):t._e(),t._v(" "),"tab3"===t.activeTab?i("div",[i("movie-top")],1):t._e()],1)},staticRenderFns:[]};var L=i("VU/8")(q,H,!1,function(t){i("GAcz")},null,null).exports;function B(t,e){if(!function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}(t,e)){var i=t.className.split(" ");i.push(e),t.className=i.join(" ")}}var G={props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initScroll()},20)},methods:{_setSliderWidth:function(){this.children=this.$refs.sliderGroup.children;for(var t="",e=this.$refs.slider.clientWidth,i=0;i<this.children.length;i++){var n=this.children[i];B(n,"slider-item"),n.style.width=e+"px",t+=e}this.loop&&(t+=2*e),this.$refs.sliderGroup.style.width=t+"px"},_initScroll:function(){this.scroll=new M.a(this.$refs.slider,{scrollX:!0})}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"dots"},t._l(t.dots,function(e,n){return i("span",{key:n,staticClass:"dot",class:{active:t.currentPageIndex===n}})}))])},staticRenderFns:[]};var X={name:"music",data:function(){return{slider:[],list:[]}},created:function(){this._getSlider(),this._getList()},methods:{_getSlider:function(){var t=this;j("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",x()({},D,{}),V).then(function(e){0===e.code&&(t.slider=e.data.slider)})},_getList:function(){var t=this;j("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",x()({},D,{uin:0,notice:0,platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:27,_:1519963122923}),V).then(function(e){0===e.code&&(t.list=e.songlist)})}},components:{Slider:i("VU/8")(G,z,!1,function(t){i("cM8y")},"data-v-c2daf9e6",null).exports}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music"},[i("div",{staticClass:"music-content"},[i("div",{staticClass:"music-slider"},[t.slider.length?i("div",{staticClass:"slider-wrapper"},[i("slider",t._l(t.slider,function(t,e){return i("div",{key:e},[i("a",{attrs:{href:t.linkUrl}},[i("img",{attrs:{src:t.picUrl}})])])}))],1):t._e()]),t._v(" "),i("div",{ref:"wrapper",staticClass:"music-list"},[i("mu-sub-header",[t._v("巅峰榜·新歌")]),t._v(" "),t._l(t.list,function(e,n){return i("mu-list",{key:n},[i("mu-list-item",[t._v(t._s(e.data.albumname)+"\n          "),i("mu-avatar",{attrs:{slot:"leftAvatar",src:"http://imgcache.qq.com/music/photo/album_300/"+e.data.albumid%100+"/300_albumpic_"+e.data.albumid+"_0.jpg"},slot:"leftAvatar"}),t._v(" "),i("span",[t._v(t._s(e.data.singer[0].name))])],1)],1)})],2)])])},staticRenderFns:[]};var Z=i("VU/8")(X,J,!1,function(t){i("5W1Z")},null,null).exports,K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"img-view",on:{click:t.bigImg}},[i("div",{staticClass:"img-layer"}),t._v(" "),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.imgSrc[n]}})])])}))},staticRenderFns:[]};var Y={data:function(){return{list:[{image:"../../static/img/trip/trip1.jpeg",title:"爽爽贵阳",author:"😄",featured:!0},{image:"../../static/img/trip/trip9.jpeg",title:"人民广场",author:"夜色贵阳"},{image:"../../static/img/trip/trip11.jpeg",title:"镇远",author:"夜景"},{image:"../../static/img/trip/trip4.jpeg",title:"黔灵寺",author:"风景"},{image:"../../static/img/trip/trip5.jpeg",title:"人民广场",author:"夜景"},{image:"../../static/img/trip/trip6.jpeg",title:"人民广场",author:"🌃",featured:!0},{image:"../../static/img/trip/trip7.jpeg",title:"Vegetables",author:"NUyyyyyyy"},{image:"../../static/img/trip/trip8.jpeg",title:"water",author:"TDDyyyyyyy"}],isImgViewsShow:0,imgViewsSrc:"",selectIndex:void 0}},props:[{}],components:{"big-img":i("VU/8")({props:["imgSrc[index]"],data:function(){return{list:[{image:"../../static/img/trip/trip1.jpeg",title:"爽爽贵阳",author:"😄",featured:!0},{image:"../../static/img/trip/trip9.jpeg",title:"人民广场",author:"夜色贵阳"},{image:"../../static/img/trip/trip11.jpeg",title:"镇远",author:"夜景"},{image:"../../static/img/trip/trip4.jpeg",title:"黔灵寺",author:"风景"},{image:"../../static/img/trip/trip5.jpeg",title:"人民广场",author:"夜景"},{image:"../../static/img/trip/trip6.jpeg",title:"人民广场",author:"🌃",featured:!0},{image:"../../static/img/trip/trip7.jpeg",title:"Vegetables",author:"NUyyyyyyy"},{image:"../../static/img/trip/trip8.jpeg",title:"water",author:"TDDyyyyyyy"}],imgIndex:0}},methods:{bigImg:function(){this.$emit("clickit")}}},K,!1,function(t){i("1/J3")},null,null).exports},methods:{select:function(t){this.index=t,this.$store.commit("UPDATE_LOADING",!0),this.selectIndex=this.selectIndex===t?void 0:t}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gridlist-demo-container"},[i("mu-grid-list",{staticClass:"gridlist-demo"},[i("mu-sub-header",[t._v("图片展示")]),t._v(" "),t._l(t.list,function(e,n){return i("mu-grid-tile",{key:n,class:{big:n===t.selectIndex},attrs:{titlePosition:"top",actionPosition:"left",rows:e.featured?2:1,cols:e.featured?2:1},on:{click:function(e){t.select(n)}}},[i("img",{attrs:{src:e.image}}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),t._v(" "),i("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[t._v("by"),i("b",[t._v(t._s(e.author))])])])})],2)],1)},staticRenderFns:[]};var tt=i("VU/8")(Y,Q,!1,function(t){i("sWwz")},"data-v-6ae14f1a",null).exports;a.default.use(A.a);var et=new A.a({routes:[{path:"/",redirect:"/movie"},{path:"/header",component:w},{path:"/menu",component:_},{path:"/movie",name:"movie",component:L},{path:"/music",name:"music",component:Z},{path:"/trip",name:"trip",component:tt}]}),it=i("bqTm"),nt=i.n(it),st=(i("WNzO"),i("DXmm"),i("8+8L")),at=i("u64Q"),ot=i.n(at);i("E51W"),i("VrJe");a.default.use(st.a),a.default.use(ot.a),a.default.use(nt.a),new a.default({el:"#app",store:m,router:et,render:function(t){return t(T)}})},OfoF:function(t,e){},"R7B+":function(t,e){},VrJe:function(t,e){},WNzO:function(t,e){},cM8y:function(t,e){},krVB:function(t,e){},n9Nd:function(t,e){},sWwz:function(t,e){},yZ7V:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.21e53327632d9c1474d4.js.map