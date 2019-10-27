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
    <div class="top" :style="{'backgroundImage':`url(${model.banner})`}">
      <div class="info text-white p-3 d-flex flex-column jc-end h-100">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between" style="align-items: baseline;">
          <div class="scores d-flex pt-2" v-if="model.scores">
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
    <!-- end of top -->
    <div>
      <div class="bg-white px-3">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom-1">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>  
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div class='p-3 bg-white border-bottom-1'>
            <!-- 按钮 -->
            <div class="d-flex">
              <router-link class="btn btn-lg flex-1" tag="button" to="/">
                <i class="iconfont icon-menu"></i>
                英雄介绍视频
              </router-link>  
              <router-link class="btn btn-lg flex-1 ml-2" tag="button" to="/">
                <i class="iconfont icon-menu"></i>
                一图识英雄
              </router-link> 
            </div>
            <!-- skills -->
            <div class="skills mt-4">
              <div class="d-flex jc-around">
                <img :src="item.icon"
                class="icon"
                @click="currentSkillIndex=i" 
                :class="{active: currentSkillIndex===i}"
                v-for="(item,i) in model.skills" 
                :key="item._id" alt=""/>
              </div>
              <div v-if="currentSkill">
                <div class="d-flex ai-center pt-4 pb-2">
                  <h3 class="m-0">{{ currentSkill.name }}</h3>
                  <span class="text-grey-1 ml-4">
                    (冷却值：{{currentSkill.delay}} 
                    消耗：{{ currentSkill.cost }})
                  </span>
                </div>
                <p>{{currentSkill.description}}</p>
                <div class="border-bottom-1"></div>
                <p class="text-grey-1 fs-sm">小提示：{{currentSkill.tips}}</p>
              </div>
            </div>
          </div>

          <!-- 装备 -->
          <m-card plain icon="icon-menu" title="出装推荐" class="hero-items">
            <div class="fs-xl">顺风出装</div>
            <div class="d-flex jc-around text-center my-3">
              <div class="flex-1" v-for="item in model.items1" :key="item.name">
                <img :src="item.icon" class="icon">
                <div class="fs-xxs text-grey">{{item.name}}</div>
              </div>
            </div>
            <div class="border-bottom-1"></div>
            <div class="fs-xl mt-3">逆风出装</div>
            <div class="d-flex jc-around text-center mt-3">
              <div class="flex-1" v-for="item in model.items1" :key="item.name">
                <img :src="item.icon" class="icon">
                <div class="fs-xxs text-grey">{{item.name}}</div>
              </div>
            </div>
          </m-card>
          <m-card plain icon="icon-menu" title="使用技巧">
            <p class="m-0">{{model.usageTips}}</p>
          </m-card>
          <m-card plain icon="icon-menu" title="对抗技巧">
            <p class="m-0">{{model.battleTips}}</p>
          </m-card>
          <m-card plain icon="icon-menu" title="团战思路">
            <p class="m-0">{{model.teamTips}}</p>
          </m-card>
          <m-card plain icon="icon-menu" title="英雄关系">
            <div class="fs-xl">最佳搭档</div>
            <div v-for="item in model.partners" :key="item._id">
              <div class="d-flex pt-3">
                <img :src="item.hero.avatar" height="50px" alt="">
                <p class="flex-1 ml-3 text-dark m-0">{{item.description}}</p>
              </div>
            </div>
            <div class="border-bottom-1 mt-3"></div>
          </m-card>
        </swiper-slide>
        <swiper-slide>2</swiper-slide>
      </swiper>
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
      currentSkillIndex:0
    }
  },
  computed:{
    currentSkill(){
      return this.model.skills[this.currentSkillIndex]
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
  @import '../assets/scss/_variables.scss';
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
    .skills{
      img.icon{
        height: 70px;
        width: 70px;
        border:3px solid map-get($map: $colors, $key:'white');
        border-radius: 50%;
        &.active{
          border-color:map-get($map: $colors, $key:'primary');
        }
      }
    }
    .hero-items{
      img.icon{
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }
  }  
</style>
