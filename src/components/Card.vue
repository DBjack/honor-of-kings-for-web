<template>
  <div class="card mt-4 bg-white p-3">
    <div class="card-header d-flex pb-3 ai-center">
      <i :class="`iconfont icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2 text-left">{{title}}</div>
      <i class="iconfont icon-menu"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>