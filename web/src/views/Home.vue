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
      
  </div>
</template>

<script>
export default{
  data(){
    return {
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
