<template>
    <m-card :icon="icon" :title="title">
        <div class="nav jc-between">
              <div v-for="(category,i) in categories" :key="i" class="nav-item"  :class="{active:newsActive===i}">
                <div class="nav-link">{{category.name}}</div>  
              </div> 
            </div>
            <div class="pt-2">
              <swiper>
                <swiper-slide  v-for="(category,m) in categories" :key="m">
                  <div class="py-2 d-flex" v-for="(news,n) in category.newsList" :key="n">
                    <slot name="item" :news="news"></slot>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
      </m-card>
</template>
<script>

export default {
    props:{
        title:{
            type:String,
            required:true
        },
        icon:{
            type:String,
            required:true
        },
        categories:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
            newsActive:0
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.card{
    border-bottom: 1px solid map-get($map: $colors, $key:'light-1');
    .card-header{
        border-bottom:1px solid map-get($map: $colors, $key:'light-1');
    }
}
</style>