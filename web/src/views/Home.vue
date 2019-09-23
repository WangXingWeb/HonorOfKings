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
      <div class="nav-icons bg-white mt-3 d-flex flex-wrap text-center pt-3">
        <div class="nav-item mb-3" 
          v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div>爆料站</div>
        </div>
      </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
        swiperOption: {
          autoplay: {
    　　　　delay: 2000,
      　　  disableOnInteraction: false
      　　},
          pagination: {
            el: '.pagination-home'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
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
  .nav-item{
    width: 25%;
    border-right:1px solid $border-color;
  }
}
</style>
