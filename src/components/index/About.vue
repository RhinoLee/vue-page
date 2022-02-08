<template>
  <Tab @changeCate="changeCate"></Tab>
  <div class="about-area">
    <div class="wrap vertical">
      <h2 class="title">{{ nowCate }}</h2>
      <p class="content">
        I'm more experienced in eCommerce web projects and mobile banking apps,
        but also like to work with creative projects, such as landing pages or
        unusual corporate websites.
      </p>
      <div class="more-wrap">
        <a href="#">see more</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Tab from "@/components/index/Tab.vue";
export default {
  components: {
    Tab,
  },
  setup() {
    const nowCate = ref("Profile");
    function changeCate(val) {
      nowCate.value = val;
    }

    return { nowCate, changeCate };
  },
};
</script>

<style lang="scss">
.about-area {
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 35px;
  background: #fff;
  p.content {
    padding-bottom: 20px;
    font-size: 14px;
    color: $text-dark;
    line-height: 1.5;
  }
}
</style>