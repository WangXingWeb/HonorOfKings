<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black  py-2 px-3 d-flex ai-center">
        <img src="../assets/images/logo.png" height="30" alt="">
        <div class="pl-2 flex-1">
            <span class="text-white fs-sm pb-1 pr-3">王者荣耀</span>
            <span class="text-white fs-xs fs-xxs">攻略站</span>
        </div>
        <router-link to="/" tag="div" class="text-white"> 
          更多英雄  &nbsp;&gt;
        </router-link>
    </div>
    <div>
      {{model.avatar}}
      <img :src="model.avatar"> 
    </div>
  </div>
</template>
<script>
export default{
  props:{
    id:{
      required:true
    }
  },
  data(){
    return{
      model:null
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get(`/heroes/${this.id}`)
      this.model = res.data
      console.log(this.model);
    }
  },
  created(){
    this.fetch()
  },
  watch:{
    id:fetch
  }
}
</script>  
