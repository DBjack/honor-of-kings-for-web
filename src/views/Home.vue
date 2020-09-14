<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img
          src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg"
          class="w-100"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/ddc8c8922cbb694dfb73c86bb03fce22.jpeg"
          class="w-100"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg"
          class="w-100"
        />
      </swiper-slide>
      <div
        class="swiper-pagination swiper-home text-right"
        slot="pagination"
      ></div>
    </swiper>

    <!-- nav-icons -->
    <div class="nav-icons bg-white mt-3 d-flex flex-wrap pt-3 text-grey">
      <div
        class="nav-item mb-4 mt-2"
        v-for="(item, index) in navIcons"
        :key="index"
      >
        <i :class="`sprite sprite-${item.icon} mb-2`"></i>
        <div>{{ item.title }}</div>
      </div>
      <div class="bg-light w-100 py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <!-- card -->

    <m-list-card title="新闻资讯" icon="menu1" :categories="newsCats">
      <template #items="{category}">
        <div
          class="d-flex my-3"
          v-for="(news, i) in category.newsList"
          :key="i"
        >
          <span class="text-grey">[{{ news.categoryName }}]</span>
          <span class="mx-2">|</span>
          <span class="flex-1 text-left text-black">{{ news.title }}</span>
          <span>{{ news.date }}</span>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
const navIcons = [
  {
    title: "爆料站",
    icon: "news",
  },
  {
    title: "故事站",
    icon: "story",
  },
  {
    title: "周边商城",
    icon: "shop",
  },
  {
    title: "体验服",
    icon: "exprience",
  },
  {
    title: "新人专区",
    icon: "newpeople",
  },
  {
    title: "荣耀传承",
    icon: "inherit",
  },
  {
    title: "同人社区",
    icon: "community",
  },
  {
    title: "王者营地",
    icon: "campsite",
  },
  {
    title: "公众号",
    icon: "public",
  },
  {
    title: "版本介绍",
    icon: "exprience",
  },
];
export default {
  name: "Home",

  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-home",
        },
        // Some Swiper option/callback...
      },
      navIcons,
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => {
            return (v = {
              categoryName: "公告",
              title: "6月2日不停机公告",
              date: "06/02",
            });
          }),
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "公告",
            title: "dasfd6月2日不停机公告",
            date: "06/02",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "公告",
            title: "6月2日不gasdg停机公告",
            date: "06/02",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "公告",
            title: "6月2日不停机公告",
            date: "06/02",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: "公告",
            title: "6月2日不停机公告",
            date: "06/02",
          })),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/variables";

.swiper-home {
  & .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.25rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  & .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}

.card {
  .card-header {
    border-bottom: 1px solid $border-color;
  }
}
</style>
