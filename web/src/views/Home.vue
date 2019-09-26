<template>
  <div>
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide>
          <img src="../assets/images/1.jpeg" class="w-100" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/2.gif" class="w-100" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/3.jpeg" class="w-100" alt="">
        </swiper-slide>
        <div class="swiper-pagination pagination-home text-right px-3 pb-1 text-gray-1" slot="pagination"></div>
      </swiper>
      <!-- end of swiper -->
      <div class="nav-icons bg-white mt-3  text-center pt-3">
        <div class="d-flex flex-wrap">
          <div class="nav-item mb-3">
            <i class="sprite sprite-news"></i>
            <div class="py-2">爆料站</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-story"></i>
            <div class="py-2">故事站</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-store"></i>
            <div class="py-2">周边商城</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-experience"></i>
            <div class="py-2">体验服</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-newplayer"></i>
            <div class="py-2">新人专区</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-lineage"></i>
            <div class="py-2">荣耀·传承</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-colleagues"></i>
            <div class="py-2">同人社区</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-wangzhe"></i>
            <div class="py-2">王者营地</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-weixin"></i>
            <div class="py-2">公众号</div>
          </div>
          <div class="nav-item mb-3">
            <i class="sprite sprite-version"></i>
            <div class="py-2">版本介绍</div>
          </div>
        </div>
        <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
          <i class="sprite sprite-arrow mr-1"></i>
          收起
        </div>
      </div>
      <!-- end of nav icons -->
<<<<<<< Updated upstream
      <m-list-card 
        icon="icon-menu" 
        title="新闻资"  
        :categories="newsCats"
        >
        <template #item="{news}">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span class="flex-1">{{news.title}}</span>
          <span>{{news.date}}</span>
        </template>  
      </m-list-card>

=======
      <m-card icon="icon-menu" title="新闻资讯">
        <div class="nav jc-between">
            <div class="nav-item active">
              <div class="nav-link">热门</div>  
            </div> 
            <div class="nav-item">
              <div class="nav-link">新闻</div>  
            </div>
            <div class="nav-item">
              <div class="nav-link">公告</div>  
            </div> 
            <div class="nav-item">
              <div class="nav-link">活动</div>  
            </div> 
            <div class="nav-item">
              <div class="nav-link">赛事</div>  
            </div>  
          </div>
          
          <div class="pt-2">
            <swiper>
              <swiper-slide v-for="m in 5" :key="m">
                <div class="py-2 d-flex" v-for="n in 5" :key="n">
                  <span>[公告]</span>
                  <span>|</span>
                  <span class="flex-1">9月24日全服不停机更新公告</span>
                  <span>09/23</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>
      </m-card>
>>>>>>> Stashed changes
      <m-card icon="icon-flightpeople3" title="英雄列表">

      </m-card>
      <m-card icon="icon-flightpeople3" title="精彩视频">

      </m-card>
      <m-card icon="icon-flightpeople3" title="图文攻略">

      </m-card>
  </div>
</template>

<script>
export default{
  data(){
    return {
      newsCats:[
        {
          name:'热门',
          newsList:new Array(5).fill({}).map(v => ({
              categoryName:'公告',
              title:'游戏音效异常问题说明',
              date:'06/01'
            }))
        },
        {
          name:'新闻',
          newsList:new Array(5).fill({}).map(v => ({
              categoryName:'新闻',
              title:'游戏音效异常问题说明',
              date:'06/01'
            }))
        },
        {
          name:'公告',
          newsList:new Array(5).fill({}).map(v => ({
              categoryName:'新闻',
              title:'游dd戏音效异常问题说明',
              date:'06/01'
            }))
        },
        {
          name:'活动',
          newsList:new Array(5).fill({}).map(v => ({
              categoryName:'新闻',
              title:'游戏音效异常问题说明',
              date:'06/01'
            }))
        },
        {
          name:'赛事',
          newsList:new Array(5).fill({}).map(v => ({
              categoryName:'新闻',
              title:'游戏音效异常问题说明',
              date:'06/01'
            }))
        }
      ],
      swiperOption: {
        loop:true,
        autoplay: {
  　　　　delay: 2000,
    　　  disableOnInteraction: false
    　　},
        pagination: {
          el: '.pagination-home'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.pagination-home{
  .swiper-pagination-bullet{
    background: map-get($map: $colors, $key: 'white');
    border-radius: 2px;
    opacity: 1;

    &.swiper-pagination-bullet-active{
      background: map-get($map: $colors, $key: 'info')
    }
  }
}

.nav-icons{
  border-top:1px solid $border-color;
  border-bottom:1px solid $border-color;
  .nav-item{
    width: 25%;
    border-right:1px solid $border-color;

    &:nth-child(4n){
      border-right:none;
    }
  }
}
</style>
