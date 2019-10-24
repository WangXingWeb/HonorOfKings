<template>
  <div class="page-arctile" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <i class="iconfont icon-arrow-left mr-2 text-blue" @click="$router.back(-1)"></i>
      <strong class="flex-1 text-blue text-ellipsis">{{model.title}}</strong>
      <div class="text-grey fs-xs pl-2">{{model.createdAt | date}}</div>
    </div>
    <div v-html="model.body" class="px-3 body"></div>
    <div class="border-top-5 px-3 py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue ml-2 fs-lg">相关资讯</strong>
      </div>
      <div class="py-2">
        <router-link
         tag="div" 
         :to="`/articles/${item._id}`"
         v-for="item in model.related"
         :key="item._id"
         class="text-ellipsis py-2">
         {{item.title}}
         </router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  export default {
    filters:{
      date(val){
        return dayjs(val).format('YYYY/MM/DD')
      }
    },
    props:{
      id:{
        required:true
      }
    },
    data(){
      return {
        model:{}
      }
    },
    watch:{
      id(){
        this.fetch()
      },
      //简写
      //id:fetch
    },
    methods:{
      async fetch(){
        const res = await this.$http.get(`articles/${this.id}`)
        this.model = res.data
      }
    },
    created(){
      this.fetch()
    }
  }
</script>

<style lang="scss">
.page-arctile{
  .body{
    img{
      max-width: 100%;
      height: auto;
    }
    iframe{
      width: 100%;
      height: auto;
    }
  }
}
  
</style>
