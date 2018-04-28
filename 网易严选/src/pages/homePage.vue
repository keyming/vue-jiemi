<<template>
        <div>   
                <!-- 轮播图  -->
                 <div class="swiper_area">
                        <swiper :options="swiperOption">
                                <div class="swiper-pagination" slot="pagination"></div>
                                <swiper-slide v-for="slide in swiperSlides">
                                        <img :src="slide.picUrl">
                                </swiper-slide>
                        </swiper>
                </div> 
                
                <!-- homepageRouter -->
                <nav>
                        <!-- 居家  -->
                        <router-link to="/jujia" class="nav_bar">
                        <div>
                                
                                <div class="navToDesk navLinkTo">

                                </div>
                                <p class="router">居家</p>
                        </div> 
                        </router-link>

                        <!-- 餐厨  -->
                        <router-link to="/canchu" class="nav_bar">
                        <div>
                                
                                <div class="navToCook navLinkTo">

                                </div>
                                <p class="router">餐厨</p>
                        </div> 
                        </router-link>   

                        <!-- 配件  -->
                        <router-link to="/peijian" class="nav_bar">
                        <div>
                                
                                <div class="navToPei navLinkTo">

                                </div>
                                <p class="router">配件</p>
                        </div> 
                        </router-link> 
                        <!-- 服装  -->
                        <router-link to="/fuzhuang" class="nav_bar">
                        <div>
                                
                                <div class="navToBag navLinkTo">

                                </div>
                                <p class="router">服装</p>
                        </div> 
                        </router-link> 
                        <!-- 更多  -->
                        <router-link to="/gengduo" class="nav_bar">
                                <div>
                                        <div class="navToMore navLinkTo">

                                        </div>
                                        <p class="router">更多</p>
                                </div> 
                        </router-link> 
                </nav>

                <!-- 品牌制造商直供  -->
                 <div class="pingpai">
                        <div class="title">
                                <p class="title_in">品牌制造商直供</p>
                        </div> 
                        <div class="pingpai_img">
                                <div class="pingpai_img_box">
                                       <img  v-for="img in imgSrcLeft" :src="img.url" class="leftImgCss"/> 
                                </div>
                                <div class="pingpai_img_box">
                                        <img :src="imgSrcRight" class="rightImgCss"/>
                                </div>
                        </div> 
                </div> 

                <!-- 周一周四 新品首发  -->
                 <div class="xinpin">
                        <div class="title">
                                <p class="title_in">周一周四•新品首发</p>
                        </div>

                        <div class="xinpin_box">
                                <div v-for="xinpin in xinPin" class="xinpinCon">
                                         <img v-lazy="xinpin.listPicUrl"/> 
                                        <p>{{xinpin.name}}</p>
                                </div>
                        </div>
                        
                       
                </div> 

                <!-- 人气推荐 -->
                 <div class="renqi">
                        <div class="title">
                                <p class="title_in">人气推荐</p>
                        </div>

                        <div class="renqi_box">
                             <div class="renqiCon" v-for="renqi in renQi">
                                        <div class="renqiCon_left">
                                                <img v-lazy="renqi.listPicUrl"/>
                                        </div>
                                        <div class="renqiCon_right">
                                               <p class="renqiName">{{renqi.name}}</p> 
                                               <p class="renqiDesc">{{renqi.simpleDesc}}</p>
                                                <p class="renqiMoney">{{renqi.retailPrice | currency}}</p> 
                                                <p v-if="renqi.colorNum" class="renqiColor"><i class="colorIcon">{{renqi.colorNum}}</i>色可选</p>
                                        </div>
                             </div>  
                        </div>
                </div> 

                <!-- 专题精选  -->
                <div class="zhuanti">
                        <div class="title">
                                <p class="title_in">专题精选</p>
                        </div>
                        <div class="zhuantiBox">
                                <div class="zhuantiPic">
                                        <swiper :options="swiperOption1">
                                                <swiper-slide v-for="zhuanti in zhuanTi">
                                                        <img v-lazy="zhuanti.scenePicUrl">
                                                        <P class="zhuantiTitle">{{zhuanti.title}}<span class="zhuantiMoney">{{zhuanti.priceInfo|currency}}元起</span></P>
                                                </swiper-slide>
                                        </swiper>
                                 </div>
                        </div>
                </div> 

                <!-- 明细 -->
                <div class="mingxi" v-for="detail in cateList">
                        <!--  标题  -->
                        <div class="title">
                                <p class="title_in">{{detail.name}}好物</p>
                        </div>

                        <!--  内容  -->
                        <div class="detail_box">
                                <div v-for="box in detail.itemList" class="detail_con">
                                        <img v-lazy="box.listPicUrl" />
                                        <p class="detailName">{{box.name}}</p>
                                        <p class="detailMoney">{{box.retailPrice|currency}}</p>
                                </div>
                        </div>

                </div>

                <!-- 底部  -->
                <div class="bottom">
                      <div class="download">
                              <div class="download_area bottomClick">下载App</div>
                              <div class="openWinVer bottomClick">电脑版</div>
                      </div>  
                       <p class="meg">Author:魏瑞</p>
                       <p class="meg">Telephone:18855584523</p>
                       <p class="meg">Github:weirui88888</p>
                </div>

               
        </div>
</template>

<script>
 
        export default {
                name:"homepage",
                data:function(){
                        return {
                                title:"首页",
                                searchUrl:"http://localhost:8080/static/data/homepagePic.json",
                                swiperSlides:[
                                        {
                                        "id": 1083001,
                                        "name": "活动 双12正式",
                                        "picUrl": "http://yanxuan.nosdn.127.net/8c45c30d43a1e277f594e07944c7c998.jpg",
                                        "targetUrl": "https://m.you.163.com/act/pub/wvfdR0G0l0.html"
                                        },
                                        {
                                        "id": 1071002,
                                        "name": "类目 功能厨具",
                                        "picUrl": "http://yanxuan.nosdn.127.net/74eef75edbb4a07f5429898c81d0aa6a.jpg",
                                        "targetUrl": "http://you.163.com/item/list?categoryId=1005001&subCategoryId=1008012"
                                        },
                                        {
                                        "id": 1060008,
                                        "name": "类目 箱包C",
                                        "picUrl": "http://yanxuan.nosdn.127.net/a78e561b84fe52c9858be7ff02428d7c.jpg",
                                        "targetUrl": "http://you.163.com/item/list?categoryId=1008000&subCategoryId=1012001"
                                        },
                                        {
                                        "id": 1068004,
                                        "name": "类目 袜子",
                                        "picUrl": "http://yanxuan.nosdn.127.net/7381ee939fbac0fa3211622d8f2a3379.jpg",
                                        "targetUrl": "http://you.163.com/item/list?categoryId=1010000&subCategoryId=1008004"
                                        },
                                        {
                                        "id": 1067005,
                                        "name": "类目 杯壶",
                                        "picUrl": "http://yanxuan.nosdn.127.net/6162a1cb61db06f693b19d6e0d9c6662.jpg",
                                        "targetUrl": "http://you.163.com/item/list?categoryId=1005001&subCategoryId=1007000"
                                        }
                                ],
                                swiperOption:{
                                        //direction : 'vertical',
                                        grabCursor : true,
                                         //scrollbar:'.swiper-scrollbar',//页面滚轮
                                        // prevButton:'.swiper-button-prev',//上一页箭头
                                        // nextButton:'.swiper-button-next',//下一页箭头
                                        autoplay: 2000,//自定播放
                                        setWrapperSize :true,
                                        pagination : '.swiper-pagination',
                                        paginationClickable :true,
                                        mousewheelControl : true,
                                        observeParents:true,                                     
                                },
                                swiperOption1:{
                                         grabCursor : true,
                                         autoplay: false,//自定播放
                                        setWrapperSize :true,
                                        paginationClickable :true,
                                        mousewheelControl : true,
                                        observeParents:true, 
                                },
                                imgSrcLeft:[
                                        {url:"../static/images/shoe.jpg"},
                                        {url:"../static/images/wazi.jpg"}
                                ],
                                imgSrcRight:"../static/images/shuibei.jpg",

                                // 新品
                                xinPin:[
                                        {
                                        "colorNum": 0,
                                        "id": 1113021,
                                        "limitedFlag": false,
                                        "listPicUrl": "http://yanxuan.nosdn.127.net/ef659663b2ca64e9a8fe4f39fbef420d.png",
                                        "name": "网易味央黑猪肉 双月赏味配送",
                                        "newItemFlag": false,
                                        "pieceNum": 0,
                                        "pieceUnitDesc": "件",
                                        "primarySkuPreSellPrice": 650,
                                        "primarySkuPreSellStatus": 1,
                                        "retailPrice": 650,
                                        "sellVolume": 760,
                                        "simpleDesc": "限量供应，12月12日零点开售。",
                                        "status": 2,
                                        "unitPrice": 0
                                        },
                                        {
                                        "colorNum": 0,
                                        "id": 1092037,
                                        "limitedFlag": false,
                                        "listPicUrl": "http://yanxuan.nosdn.127.net/c2050cf8dd0ff2b5e5701f886260ab21.png",
                                        "name": "红玫青果香薰挥发液",
                                        "newItemFlag": false,
                                        "pieceNum": 0,
                                        "pieceUnitDesc": "件",
                                        "primarySkuPreSellPrice": 0,
                                        "primarySkuPreSellStatus": 0,
                                        "retailPrice": 59,
                                        "sellVolume": 227,
                                        "simpleDesc": "花娆热浪与初甜桂味",
                                        "status": 2,
                                        "unitPrice": 0
                                        },
                                        {
                                        "colorNum": 2,
                                        "id": 1096006,
                                        "limitedFlag": false,
                                        "listPicUrl": "http://yanxuan.nosdn.127.net/67f393d0e523189047cf69f6907adf77.png",
                                        "name": "磨砂牛皮商务休闲靴",
                                        "newItemFlag": false,
                                        "pieceNum": 0,
                                        "pieceUnitDesc": "件",
                                        "primarySkuPreSellPrice": 0,
                                        "primarySkuPreSellStatus": 0,
                                        "retailPrice": 369,
                                        "sellVolume": 648,
                                        "simpleDesc": "柔软牛皮，打造更优雅的舒适",
                                        "status": 2,
                                        "unitPrice": 0
                                        },
                                        {
                                        "colorNum": 0,
                                        "id": 1092011,
                                        "limitedFlag": false,
                                        "listPicUrl": "http://yanxuan.nosdn.127.net/8d120b3d6bd20e64b02597d484a62f4f.png",
                                        "name": "超轻防水杜邦纸便携收纳包",
                                        "newItemFlag": false,
                                        "pieceNum": 0,
                                        "pieceUnitDesc": "件",
                                        "primarySkuPreSellPrice": 0,
                                        "primarySkuPreSellStatus": 0,
                                        "retailPrice": 29,
                                        "sellVolume": 2021,
                                        "simpleDesc": "撕不烂的“纸”",
                                        "status": 2,
                                        "unitPrice": 0
                                        }
                                ],
                                //人气
                                renQi:[
                                        {
                                                "colorNum": 9,
                                                "id": 1009009,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/8326e257f8a9a38d237c10a51fee3a9d.png",
                                                "name": "白鹅绒秋冬加厚羽绒被",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 1999,
                                                "sellVolume": 2293,
                                                "simpleDesc": "双层立衬工艺杜绝热量流失",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1006001,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/8514595288532f0bcbdc5c1e9d226066.png",
                                                "name": "日式多功能颈枕 针织款",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 69,
                                                "sellVolume": 37873,
                                                "simpleDesc": "细腻天竺棉，亲肤舒适",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 8,
                                                "id": 1006051,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/a1b789392b451d3334c16ce076b80cdf.png",
                                                "name": "皇室御用超柔毛巾",
                                                "newItemFlag": false,
                                                "pieceNum": 2,
                                                "pieceUnitDesc": "条",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 59,
                                                "sellVolume": 22288,
                                                "simpleDesc": "至柔至软",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                ],
                                zhuanTi:[
                                        {
                                                "id": 1003000,
                                                "itemPicUrl": "http://yanxuan.nosdn.127.net/beef44d17877e54f9ed04697af305375.jpg",
                                                "priceInfo": 9.9,
                                                "scenePicUrl": "http://yanxuan.nosdn.127.net/beef44d17877e54f9ed04697af305375.jpg",
                                                "subtitle": "超值性价比好物荟集",
                                                "title": "严选年终大赏之性价比榜",
                                                "topicId": 20161206
                                                },
                                                {
                                                "id": 1002000,
                                                "itemPicUrl": "http://yanxuan.nosdn.127.net/50a435a5481998a5e0d29827d80f9ef1.jpg",
                                                "priceInfo": 19.9,
                                                "scenePicUrl": "http://yanxuan.nosdn.127.net/50a435a5481998a5e0d29827d80f9ef1.jpg",
                                                "subtitle": "暖冬御寒超全指南",
                                                "title": "12月篇 本月必买的好物",
                                                "topicId": 20161129
                                                },
                                                {
                                                "id": 1003001,
                                                "itemPicUrl": "http://yanxuan.nosdn.127.net/e0519947acd3413d922d214e51ac6123.jpg",
                                                "priceInfo": 14.9,
                                                "scenePicUrl": "http://yanxuan.nosdn.127.net/e0519947acd3413d922d214e51ac6123.jpg",
                                                "subtitle": "教你像ins达人一样拍美食",
                                                "title": "高颜值好物，晒出生活好品味",
                                                "topicId": 20161201
                                                }
                                ],
                                cateList:[
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/92357337378cce650797444bc107b0f7.jpg",
                                        "frontName": "回家，放松身心",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png",
                                        "id": 1005000,
                                        "itemList": [
                                                {
                                                "colorNum": 0,
                                                "id": 1097011,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/fea36ef2514c904f4f45f1975f37f289.png",
                                                "name": "原素系列1.8米实木床",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 3899,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 3899,
                                                "sellVolume": 101,
                                                "simpleDesc": "【预售】预计12月30日开始发货",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1097005,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/e5fd0724a05387615738173fb8f1570d.png",
                                                "name": "原素系列实木餐椅（两把）",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 1199,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 1199,
                                                "sellVolume": 448,
                                                "simpleDesc": "【预售】预计12月30日开始发货",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1084001,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/07f682d405c1d2ed343c210ac8f8862a.png",
                                                "name": "纯棉简欧条纹针织盖毯",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 249,
                                                "sellVolume": 481,
                                                "simpleDesc": "纯棉针织，柔软亲肤",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1068012,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/9e1eb31c36e6056c3282ab34613ae17f.png",
                                                "name": "全棉色织绗缝四件套",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 599,
                                                "sellVolume": 189,
                                                "simpleDesc": "可以用一“被”子的四件套",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 3,
                                                "id": 1055024,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/448690d192746b999e87a54505ce30f0.png",
                                                "name": "60S醇净暖绒AB面四件套",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 449,
                                                "sellVolume": 1136,
                                                "simpleDesc": "全棉缎纹磨毛，温暖你的冬季被窝",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1006014,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/2b537159f0f789034bf8c4b339c43750.png",
                                                "name": "双宫茧桑蚕丝被 子母被",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 1399,
                                                "sellVolume": 1487,
                                                "simpleDesc": "子母被设计，四季皆可使用",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1009024,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png",
                                                "name": "日式和风懒人沙发",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 599,
                                                "sellVolume": 3652,
                                                "simpleDesc": "优质莱卡纯棉，和风家居新体验",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1057036,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/8a9ee5ba08929cc9e40b973607d2f633.png",
                                                "name": "日式纯色水洗亚麻抱枕",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 79,
                                                "sellVolume": 689,
                                                "simpleDesc": "水洗亚麻，透气亲肤",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "居家"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/f4ff8b3d5b0767d4e578575c1fd6b921.jpg",
                                        "frontName": "爱，囿于厨房",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png",
                                        "id": 1005001,
                                        "itemList": [
                                                {
                                                "colorNum": 3,
                                                "id": 1006057,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/6697bc8203c9fe0a2a6b8e16377844c6.png",
                                                "name": "日式和风敞口保温杯",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 45,
                                                "sellVolume": 340,
                                                "simpleDesc": "不温不火，给你最佳水温",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1060007,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/5d7c2fea29b7bd505543f73795fb224b.png",
                                                "name": "炻瓷储藏罐",
                                                "newItemFlag": true,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 19,
                                                "sellVolume": 158,
                                                "simpleDesc": "简约炻瓷，复古生活",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1109009,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/c1dd1e8b11a13feb3d4663c12d3a462e.png",
                                                "name": "玉琢龙泉青瓷餐具 9头",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 499,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 499,
                                                "sellVolume": 44,
                                                "simpleDesc": "【预售】第二批预计12月20日开始发货",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1062035,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/02f62851508395cfd7c5e4559480303a.png",
                                                "name": "双层夹棉硅胶隔热手套",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 87.5,
                                                "sellVolume": 1756,
                                                "simpleDesc": "特长袖口，内夹棉四层防烫",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1092017,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/65eb0a280c7c41e052428a99c19f8c67.png",
                                                "name": "拼花板架刀3件一体组合",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 199,
                                                "sellVolume": 1647,
                                                "simpleDesc": "极简生活，三件美学",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1050000,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/a433d82a272ae3daef1ef3d23a609753.png",
                                                "name": "Classic欧式压铸实木炒锅30cm",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 189,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 189,
                                                "sellVolume": 2121,
                                                "simpleDesc": "榉木手柄不粘锅",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1091001,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/940d9bf058d049ca554d1e08179e4365.png",
                                                "name": "桦木全通龙骨手柄切片刀砍骨刀2件套",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 149,
                                                "sellVolume": 1488,
                                                "simpleDesc": "全通龙骨手柄，切片砍骨2件组合",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1006058,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/22b832ace6eb10c7b0057eb6eae6c3c9.png",
                                                "name": "懒人抹布",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 13.99,
                                                "sellVolume": 1235,
                                                "simpleDesc": "不怕破损，吸水吸油更方便",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "餐厨"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/cad5aba2bc52d3b8adfd0232c9814de2.jpg",
                                        "frontName": "配角，亦是主角",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png",
                                        "id": 1008000,
                                        "itemList": [
                                                {
                                                "colorNum": 4,
                                                "id": 1024009,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/95c8aac8990ca2263d2d3fb4fe62f37c.png",
                                                "name": "简约便携防水运动包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 29,
                                                "sellVolume": 23513,
                                                "simpleDesc": "轻薄防水，简单收纳",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 3,
                                                "id": 1048004,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/dbd6a4ed454952b771c2cb162b1b2969.png",
                                                "name": "韩式帆布电脑双肩包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 199,
                                                "sellVolume": 14321,
                                                "simpleDesc": "帆布双肩包 简约韩式设计",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1030016,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/f65c4bead3dd1d447cfe2a2df15aff85.png",
                                                "name": "牛皮雅致零钱包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 79,
                                                "sellVolume": 3112,
                                                "simpleDesc": "贴心设计，简约风尚",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1085019,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/ceb736b02c76091a6c8313d71375f2fd.png",
                                                "name": "20寸 纯PC“铝框”（非全铝）登机箱",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 349,
                                                "sellVolume": 10959,
                                                "simpleDesc": "时尚出行，经典之选",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1100007,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/b685478052681283db113e5d569b2352.png",
                                                "name": "磨砂牛皮德比鞋",
                                                "newItemFlag": true,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 349,
                                                "sellVolume": 1885,
                                                "simpleDesc": "经典布洛克纹，复古的英伦风",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1086013,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/31a231e17f9cd8441037db29bb43c410.png",
                                                "name": "皮毛一体鞋垫",
                                                "newItemFlag": false,
                                                "pieceNum": 2,
                                                "pieceUnitDesc": "双",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 59,
                                                "sellVolume": 301,
                                                "simpleDesc": "部分尺码预计1月10日开始发货",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1030010,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/7b8209cd603ad676f3777b0822c3ec6e.png",
                                                "name": "优雅格纹羊毛拖鞋",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 39,
                                                "sellVolume": 60317,
                                                "simpleDesc": "羊毛质地，暖心冬日",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1030012,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/d844362fe3dfc656f4740305e57c84dc.png",
                                                "name": "暖暖绒毛包跟家居拖鞋",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 39,
                                                "sellVolume": 39798,
                                                "simpleDesc": "包跟设计，温暖舒适",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "配件"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/003e1d1289f4f290506ac2aedbd09d35.jpg",
                                        "frontName": "贴身的，要亲肤",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/28a685c96f91584e7e4876f1397767db.png",
                                        "id": 1010000,
                                        "itemList": [
                                                {
                                                "colorNum": 4,
                                                "id": 1021020,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/5b53064605633a3f2f97b13bb103cf2f.png",
                                                "name": "男式基础平角内裤",
                                                "newItemFlag": false,
                                                "pieceNum": 2,
                                                "pieceUnitDesc": "条",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 59,
                                                "sellVolume": 4764,
                                                "simpleDesc": "新疆精梳棉，吸汗不闷，无拘无束",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 1,
                                                "id": 1061003,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/5133ecf4c6825037cb874cdfe3591e48.png",
                                                "name": "女式安心生理内裤",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 39,
                                                "sellVolume": 3325,
                                                "simpleDesc": "防止侧后漏，易清洗，安心度过生理期",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1109017,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/3bb33630dc5a50862cd74635b4e57bce.png",
                                                "name": "美梦成真圣诞袜组合",
                                                "newItemFlag": true,
                                                "pieceNum": 2,
                                                "pieceUnitDesc": "双",
                                                "primarySkuPreSellPrice": 24.9,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 24.9,
                                                "sellVolume": 16812,
                                                "simpleDesc": "缤纷圣诞，美梦成真",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 5,
                                                "id": 1059000,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/7998b95a7a41e5ed28ff5840f5b4babe.png",
                                                "name": "抗菌防臭抽条男袜",
                                                "newItemFlag": false,
                                                "pieceNum": 5,
                                                "pieceUnitDesc": "双",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 59,
                                                "sellVolume": 15948,
                                                "simpleDesc": "日式商务风，抗菌纱线制作",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 1,
                                                "id": 1051008,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/8e47edc7fbfceb699f2957550e24a3f3.png",
                                                "name": "女式隐形莫代尔蕾丝保暖衣",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 99,
                                                "sellVolume": 159,
                                                "simpleDesc": "100支超细莫代尔，秋季保暖打底上衣",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1076012,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/47860f93290f1d8082b876b91989c259.png",
                                                "name": "牛津纺英式经典衬衫",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 149,
                                                "sellVolume": 1700,
                                                "simpleDesc": "柔软牛津纺，英伦式经典腔调",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 3,
                                                "id": 1086050,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/61d03f18f324d2309c7308a91d54c0f3.png",
                                                "name": "女式精纺美利奴羊毛衫",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 229,
                                                "sellVolume": 1154,
                                                "simpleDesc": "100%美利奴澳毛，柔软亲肤内搭精选",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1092023,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/0d80cfb68b1d1a1230e8f493e72dfc67.png",
                                                "name": "男式免洗商务中筒袜",
                                                "newItemFlag": true,
                                                "pieceNum": 10,
                                                "pieceUnitDesc": "双",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 24.9,
                                                "sellVolume": 3582,
                                                "simpleDesc": "简洁商务风，免洗更便携",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "服装"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/ef8c49f8c92d1f86eb76dec0b5bc7cef.jpg",
                                        "frontName": "亲肤之物，严选天然",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/9fe068776b6b1fca13053d68e9c0a83f.png",
                                        "id": 1013001,
                                        "itemList": [
                                                {
                                                "colorNum": 8,
                                                "id": 1006051,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/a1b789392b451d3334c16ce076b80cdf.png",
                                                "name": "皇室御用超柔毛巾",
                                                "newItemFlag": false,
                                                "pieceNum": 2,
                                                "pieceUnitDesc": "条",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 59,
                                                "sellVolume": 22288,
                                                "simpleDesc": "至柔至软",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1064008,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/0cab69a703adbbb47ded1465ca767eb1.png",
                                                "name": "天鹅小径香薰蜡烛",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 99,
                                                "sellVolume": 500,
                                                "simpleDesc": "爱丽丝仙境的神秘花香",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1006029,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/3588ca21c954a4289e4c87c2e66ec7b7.png",
                                                "name": "中空纱华夫格毛巾",
                                                "newItemFlag": false,
                                                "pieceNum": 4,
                                                "pieceUnitDesc": "条",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 49,
                                                "sellVolume": 4249,
                                                "simpleDesc": "可以放进嘴里的安全毛巾",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1074000,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/59caefcb47fb85d4cd5e398f83c08e04.png",
                                                "name": "日式和风超声波香薰机",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 199,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 199,
                                                "sellVolume": 3263,
                                                "simpleDesc": "细腻冷雾，安静滋润",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1046003,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/afd5906fc2c8f6751279eadf12f7f181.png",
                                                "name": "原色无漂白化妆棉",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 19,
                                                "sellVolume": 13456,
                                                "simpleDesc": "天然原色，轻柔呵护肌肤",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1085001,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/26fb6097c4c2c570dc8922cde845e5f6.png",
                                                "name": "透明化妆包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 14.9,
                                                "sellVolume": 3756,
                                                "simpleDesc": "透明便捷，柔软大容量",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 3,
                                                "id": 1093012,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/2929013cabad12387b2b842c8907a5b2.png",
                                                "name": "密吸式马桶圈垫",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 19,
                                                "sellVolume": 2400,
                                                "simpleDesc": "反复粘贴，不留残胶",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1039002,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/f378a9c4d322c736b724ac5f99f6d8bf.png",
                                                "name": "精梳AB纱格毛巾",
                                                "newItemFlag": false,
                                                "pieceNum": 3,
                                                "pieceUnitDesc": "条",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 89,
                                                "sellVolume": 2759,
                                                "simpleDesc": "厚实毛巾爱好者专享",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "洗护"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/7dc78383e44df530f543659a977740de.jpg",
                                        "frontName": "爱，从心开始",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/1ba9967b8de1ac50fad21774a4494f5d.png",
                                        "id": 1011000,
                                        "itemList": [
                                                {
                                                "colorNum": 0,
                                                "id": 1082000,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/54253b7fd3429106b7def9b9124145d6.png",
                                                "name": "超人奶爸包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 199,
                                                "sellVolume": 1540,
                                                "simpleDesc": "一包多用，带娃轻松",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1028009,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/36190d51d0eea673ffb397b99ad80b7e.png",
                                                "name": "日式妈咪包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 129,
                                                "sellVolume": 932,
                                                "simpleDesc": "轻盈柔软可双肩背可手提",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1030019,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/397cd9e338c4512838c58c0d93a88944.png",
                                                "name": "20片10包 婴幼儿全棉湿巾",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 69,
                                                "sellVolume": 5814,
                                                "simpleDesc": "无化学添加剂，给宝宝的放心湿巾",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1066020,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/82c2d508a6568e770b9c258160ab9a1d.png",
                                                "name": "小肚皮保暖套装（女童）",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "套",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 109,
                                                "sellVolume": 807,
                                                "simpleDesc": "双层护暖小肚皮，温暖贴心保护",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1057017,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/5b9f4a6ab0737d8d0812896cfb5bdf75.png",
                                                "name": "打不翻的吸盘碗",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 29,
                                                "sellVolume": 4511,
                                                "simpleDesc": "食品级PP，防打翻设计",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1057015,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/af6bce6c919ec709d0d5d7b1235df5d6.png",
                                                "name": "不锈钢叉勺便携套装",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 29,
                                                "sellVolume": 2106,
                                                "simpleDesc": "安心餐具，耐摔耐磨",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1075002,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/f512197336d4d99fbbcd58f441434e45.png",
                                                "name": "12色彩虹窗画涂鸦笔套装",
                                                "newItemFlag": true,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 49,
                                                "sellVolume": 2480,
                                                "simpleDesc": "窗户上的涂鸦童话",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1026001,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/bf332cc547dd1a516b5f56fc21d1a86d.png",
                                                "name": "孕妇连裤袜（基础款）",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "条",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 19.9,
                                                "sellVolume": 873,
                                                "simpleDesc": "托腹高腰加档加宽",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "婴童"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/d233a1a9060a22e8eb0e2b326252eece.jpg",
                                        "frontName": "解忧，每个烦恼",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/c2a3d6349e72c35931fe3b5bcd0966be.png",
                                        "id": 1012000,
                                        "itemList": [
                                                {
                                                "colorNum": 0,
                                                "id": 1023001,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/8f9511d2bcccdca79b353e4331e62113.png",
                                                "name": "旅行分装瓶套装",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 45,
                                                "sellVolume": 2963,
                                                "simpleDesc": "便携式六件套，旅行好搭档",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1055023,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/490d6a64a5a8f724cf7cb42efe294ab5.png",
                                                "name": "梭织布可折叠旅行收纳包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 29,
                                                "sellVolume": 11043,
                                                "simpleDesc": "整齐收纳，旅行必备",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1046042,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/3d744cbf3e41b360159d7d9780c46a57.png",
                                                "name": "无痕立体记忆绵眼罩",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 39,
                                                "sellVolume": 4310,
                                                "simpleDesc": "轻薄透气，不漏光，不花妆容",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1006001,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/8514595288532f0bcbdc5c1e9d226066.png",
                                                "name": "日式多功能颈枕 针织款",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 69,
                                                "sellVolume": 37873,
                                                "simpleDesc": "细腻天竺棉，亲肤舒适",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1039022,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/34b972d505c0fcf70ece6b73afcc5722.png",
                                                "name": "日式真丝保湿口罩",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 29,
                                                "sellVolume": 85,
                                                "simpleDesc": "蚕丝蛋白，护肤保湿",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1027010,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/69fdd472101c7c72bee0d732ae943b42.png",
                                                "name": "男式长柄素色雨伞",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 119,
                                                "sellVolume": 2068,
                                                "simpleDesc": "细节雕琢，均出自手工",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 4,
                                                "id": 1075022,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/97ad483a94ed88216a989df83e39cbf0.png",
                                                "name": "暗格简约钢笔",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 39,
                                                "sellVolume": 4521,
                                                "simpleDesc": "致简设计，体验流畅书写",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1028005,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/1822b1ab688d36f978eab851633c9565.png",
                                                "name": "居家棉麻涤内衣收纳盒",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 45,
                                                "sellVolume": 2764,
                                                "simpleDesc": "生活，从规整身边的小物开始",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "杂货"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/dd6cc8a7e996936768db5634f12447ed.jpg",
                                        "frontName": "好吃，无添加",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/c9280327a3fd2374c000f6bf52dff6eb.png",
                                        "id": 1005002,
                                        "itemList": [
                                                {
                                                "colorNum": 0,
                                                "id": 1075019,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/c4c47aaaaddf513eda0e5b520f560485.png",
                                                "name": "芒果蜜桃乌龙茶 3克*10袋",
                                                "newItemFlag": true,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 38,
                                                "sellVolume": 1060,
                                                "simpleDesc": "蜜桃甜香，混搭乌龙甘醇",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1088009,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/56d52d4511e7c70b9768607572b5e0e1.png",
                                                "name": "冰晶棒棒糖 10克*5",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 24.9,
                                                "sellVolume": 0,
                                                "simpleDesc": "自然结晶，越拌越甜蜜",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1075013,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/3c09504e5f0b59caddc67fa7e7f11eb9.png",
                                                "name": "阳光葵花籽 110克",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 12,
                                                "sellVolume": 831,
                                                "simpleDesc": "好瓜子，敢真敢原味",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1059026,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/ae5efef406c1c67922626ee06cd97c5e.png",
                                                "name": "冻干混合水果脆 25克",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 12,
                                                "sellVolume": 1873,
                                                "simpleDesc": "唇齿之间 尽是浓浓果香",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1088000,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/34fc9edb41dc160aee9dbc7f2e65f655.png",
                                                "name": "脆香菇 70克",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 18.9,
                                                "sellVolume": 152,
                                                "simpleDesc": "真空低温脱水，留住原色原香",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1023000,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/0f858802b5eaa9ce6b95fb6dd839858b.png",
                                                "name": "脆脆虾 20克",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 18,
                                                "sellVolume": 706,
                                                "simpleDesc": "整虾可食，口口香脆",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1056013,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/0bc58700c1f535e7c13b9510a4784092.png",
                                                "name": "冻干银耳汤 15克*10包",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 49,
                                                "sellVolume": 318,
                                                "simpleDesc": "冲泡即食 美味尽享",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1090003,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/20fe0cf873905ca0c85b7a6eb49041d9.png",
                                                "name": "黑南瓜子 128克",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 15,
                                                "sellVolume": 773,
                                                "simpleDesc": "香酥清新，自然黑，无染色",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "饮食"
                                        },
                                        {
                                        "bannerUrl": "http://yanxuan.nosdn.127.net/c031900229c9f056bf65de64cc600522.jpg",
                                        "frontName": "挑选，你的生活",
                                        "iconUrl": "http://yanxuan.nosdn.127.net/7093cfecb9dde1dd3eaf459623df4071.png",
                                        "id": 1019000,
                                        "itemList": [
                                                {
                                                "colorNum": 0,
                                                "id": 1091000,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/7129bf96a8beb0f9ebfd36793a5b54c4.png",
                                                "name": "日本制造 和风侘寂茶碗",
                                                "newItemFlag": true,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 69,
                                                "sellVolume": 1645,
                                                "simpleDesc": "日式侘寂美学，传承茶道手作美瓷",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 2,
                                                "id": 1021002,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/1171e0555f81c7e9bf9030f58babc670.png",
                                                "name": "夏日甜心四件套",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 399,
                                                "sellVolume": 43,
                                                "simpleDesc": "甜心宝贝最爱，来至针织棉的呵护",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1109036,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/df3ba511fb47e850fcf86304ad961ef8.png",
                                                "name": "圣诞限量版绅士礼盒",
                                                "newItemFlag": true,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 319,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 319,
                                                "sellVolume": 519,
                                                "simpleDesc": "【预售】预计12月21日发货",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1109035,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/4be8be461c3522db204f8bfd031a6dc8.png",
                                                "name": "圣诞限量版臻享礼盒",
                                                "newItemFlag": true,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 699,
                                                "primarySkuPreSellStatus": 1,
                                                "retailPrice": 699,
                                                "sellVolume": 357,
                                                "simpleDesc": "【预售】预计12月21日发货",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1091005,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/ca372cc5ebec17fe576232907b47a27a.png",
                                                "name": "日本制造 创意多功能洗衣盆",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 49,
                                                "sellVolume": 891,
                                                "simpleDesc": "日本创意设计，一体式搓衣盆",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1092039,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/d8c18953bcb05f0b07d6b48e2d159ace.png",
                                                "name": "圆钵碗状高密材质猫抓板",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 59,
                                                "sellVolume": 197,
                                                "simpleDesc": "可抓可睡，一物两用",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 3,
                                                "id": 1086024,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/af899cfaa13f515ecb9cf9a33f41370a.png",
                                                "name": "荧光平条宠物牵引绳",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 9.9,
                                                "sellVolume": 2513,
                                                "simpleDesc": "编织荧光，夜间防走失",
                                                "status": 2,
                                                "unitPrice": 0
                                                },
                                                {
                                                "colorNum": 0,
                                                "id": 1064003,
                                                "limitedFlag": false,
                                                "listPicUrl": "http://yanxuan.nosdn.127.net/58ed94b63b39339e7814f1339013793c.png",
                                                "name": "六边形南瓜式宠物窝",
                                                "newItemFlag": false,
                                                "pieceNum": 0,
                                                "pieceUnitDesc": "件",
                                                "primarySkuPreSellPrice": 0,
                                                "primarySkuPreSellStatus": 0,
                                                "retailPrice": 89,
                                                "sellVolume": 1234,
                                                "simpleDesc": "给萌宠柔软包裹的归家感",
                                                "status": 2,
                                                "unitPrice": 0
                                                }
                                        ],
                                        "name": "其他"
                                        }
                                ]
                        }
                },
                filters:{
                        currency:function(val){
                                return "￥"+val;
                        }
                },
                methods:{
                        getPic:function(){
                                this.$http.get(this.searchUrl).then(function(res){
                                         this.swiperSlides = res.body.focusList;  
                                        },function(res){
                                                console.log(res)
                                        })
                                }
                },
                mounted:function(){
                        // this.getPic()
                }

        }
</script> 

<style scoped>
@import "../../static/css/homepage.css"; 
</style>

