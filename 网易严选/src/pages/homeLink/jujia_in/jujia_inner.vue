<<template>
        <div>
                
                <img :src="srcUrl" class="imgMeg" />
                <h3 class="titleName">{{title}}</h3>
        </div>
</template>

<script>
        export default {
                name:"jujia_inner",
                data:function(){
                        return {
                                title:"",
                                srcUrl:"",
                                index :0,
                                thisTime:{},
                                thispageMeg:[
                                       {
                                               bannerUrl:"http://yanxuan.nosdn.127.net/92357337378cce650797444bc107b0f7.jpg",
                                               frontName:"回家,放松身心"
                                       },
                                       {
                                               bannerUrl:"http://yanxuan.nosdn.127.net/f4ff8b3d5b0767d4e578575c1fd6b921.jpg",
                                               frontName:"爱，囿于厨房"
                                       },
                                       {
                                               bannerUrl:"http://yanxuan.nosdn.127.net/cad5aba2bc52d3b8adfd0232c9814de2.jpg",
                                               frontName:"配角，亦是主角"
                                       },
                                       {
                                               bannerUrl:"http://yanxuan.nosdn.127.net/003e1d1289f4f290506ac2aedbd09d35.jpg",
                                               frontName:"贴身的，要亲肤"
                                       },
                                       {
                                               bannerUrl:"http://yanxuan.nosdn.127.net/ef8c49f8c92d1f86eb76dec0b5bc7cef.jpg",
                                               frontName:"亲肤之物，严选天然"
                                       },
                                       {
                                               bannerUrl:"http://yanxuan.nosdn.127.net/7dc78383e44df530f543659a977740de.jpg",
                                               frontName:"爱，从心开始"
                                       },
                                ]
                        }
                },
                 watch: { //通过watch观察数据的变化,当没有数据变化时，不会触发事件
                '$route' (to, from) {
                                // this.title = to.params
                                // console.log(this.title)
                                this.index = to.query.index;
                                this.thisTime = this.thispageMeg[this.index];
                                this.title = this.thisTime["frontName"];
                                this.srcUrl = this.thisTime["bannerUrl"];
                        }
                }

               
               

        }
</script>

<style>

</style>

