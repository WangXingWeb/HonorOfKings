<template>
    <m-card :icon="icon" :title="title">
        <div class="nav jc-between">
              <div v-for="(category,i) in categories" :key="i" class="nav-item" 
              @click="$refs.list.swiper.slideTo(i)"  :class="{active:active===i}">
                <div class="nav-link">{{category.name}}</div>  
              </div> 
            </div>
            <div class="pt-2">
              <swiper ref="list" :options="{autoHeight:true}"
                @slide-change="active = $refs.list.swiper.realIndex">
                <swiper-slide v-for="(category,m) in categories" :key="m">
                  <slot name="item" :category="category"></slot>
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
            active:0
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