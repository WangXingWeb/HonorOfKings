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
    <div class="top" :style="{'backgroundImage':`url(${imgurl})`}">
      <div class="info text-white p-3 d-flex flex-column jc-end h-100">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between">
          <div class="scores d-flex ai-center pt-2" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="span" class="text-grey fs-sm">
            皮肤：2&gt;
          </router-link>
        </div>
      </div>
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
      model:null,
      imgurl:'https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/167/167-bigskin-1.jpg'
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

<style lang="scss">
  .page-hero{
    .top{
      height:50vw;
      background:#fff no-repeat top center;
      background-size:auto 100%; 
    }
    .info{
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));

      .scores{
        .badge{
          width: 1em;
          height: 1em;
          line-height: 0.9em;
          font-size: 0.6m;
          text-align: center;
          border-radius: 50%;
          margin: 0 0.25em;
          display: inline-block;
          border:1px solid rgba(255,255,255,0.3)
        }
      }
    }
  }  
</style>
