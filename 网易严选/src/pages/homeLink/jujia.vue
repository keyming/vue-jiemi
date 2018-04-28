<<template>
        <div>
                <header>
                        
                        <ul class="titleLink">
                                <li v-for="(item,index) in title"  @click="setCur(index,item.id)" :class="{cur:item.isCur}">
                                       <router-link :to="{ path: item.link, query:{index: index}}">
                                               {{item.name}}
                                       </router-link>
                                </li>
                        </ul>
                </header>
                <div class="ts">
                        <router-view></router-view>
                </div>
                
        </div>
</template>

<script>
        export default {
                name:"jujia",
                data:function(){
                        return {
                                title:[{
                                        name:"居家",
                                        id:1,
                                        isCur:true,
                                        link:"/jujia/jujia"
                                },
                                {
                                        name:"餐厨",
                                        id:2,
                                        isCur:false,
                                        link:"/jujia/canchu"
                                },
                                {
                                        name:"配件",
                                        id:3,
                                        isCur:false,
                                        link:"/jujia/peijian"
                                },{
                                        name:"服装",
                                        id:4,
                                        isCur:false,
                                        link:"/jujia/fuzhuang"

                                },{
                                        name:"洗护",
                                        id:5,
                                        isCur:false,
                                        link:"/jujia/xihu"
                                }
                                ,{
                                        name:"婴童",
                                        id:6,
                                        isCur:false,
                                        link:"/jujia/yingtong"
                                }]
                        }
                },
                methods:{
                       setCur: function (index,id) {
                                 this.title.forEach(function (v,i) {
                                        i==index? v.isCur=true: v.isCur=false;
                                });
                        }
                }

        }
</script>



<style scoped>
@import "../../../static/css/jujia.css";
</style>

