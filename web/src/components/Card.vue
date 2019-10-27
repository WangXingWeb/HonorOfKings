<template>
    <div class="card bg-white p-3 mt-3">
        <div class="card-header d-flex ai-center pb-3"
        :class="{'border-bottom-1': !plain,'pb-3':!plain}">
          <i class="iconfont mr-2 text-dark-1" :class="icon"></i>
          <strong class="fs-xl flex-1">{{title}}</strong>
          <i  class="iconfont icon-options fs-xll text-dark-1" style="font-size:30px;"></i>
        </div>
        <div class="card-body pt-3">
            <slot></slot>    
        </div>
      </div>
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
        plain:{
            type:Boolean
        }
    },
    data(){
        return {}
    }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.card{
    border-bottom: 1px solid map-get($map: $colors, $key:'light-1');
}
</style>