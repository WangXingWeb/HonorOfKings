<template>
    <div>
        <div class="topbar bg-black  py-2 px-3 d-flex ai-center">
            <img src="../assets/images/logo.png" height="30" alt="">
            <div class="pl-2 flex-1">
                <div class="text-white fs-sm pb-1">王者荣耀</div>
                <div class="text-grey-1 fs-xs fs-xxs">团队成就更多</div>
            </div>
            <button type="button" class="btn bg-primary fs-sm py-1 px-2">直接下载</button>
        </div>
        <div class="bg-primary pt-3 pb-2">
            <div class="nav nav-inverse jc-around text-white pb-1">
                <div class="nav-item active">
                    <router-link tag="div" to="/">首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" to="/">攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link tag="div" to="/">赛事中心</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="scss">

    @import '//at.alicdn.com/t/font_1431667_xp6bg2kwzid.css';
    //吸顶效果
    .topbar{
        position: sticky;
        top:0;
        z-index: 999;
    }
</style>