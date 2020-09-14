<template>
  <div>
    <div class="tab-bar bg-black py-2 text-white px-4 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 text-left flex-1">
        <div class="text-white fs-sm">王者荣耀</div>
        <div class="text-grey fs-xs">团队成就更多</div>
      </div>
      <button class="bg-primary btn">立即下载</button>
    </div>
    <div class="nav bg-primary pt-3 pb-1 d-flex jc-around">
      <div class="nav-item text-white fs-sm">
        <router-link to="/home" tag="div" class="active pb-1">首页</router-link>
      </div>
      <div class="nav-item text-white fs-sm">
        <router-link to="/abort" tag="div">攻略中心</router-link>
      </div>
      <div class="nav-item text-white fs-sm">
        <router-link to="/" tag="div">赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
