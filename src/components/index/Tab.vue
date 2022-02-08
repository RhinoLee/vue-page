<template>
  <div class="tab-area">
    <div class="tab-wrap">
      <ul>
        <li @click="changeCate('Profile')" class="tab" :class="{ active: nowCate === 'Profile' }">
          <span>profile</span>
        </li>
        <li @click="changeCate('Activity')" class="tab" :class="{ active: nowCate === 'Activity' }">
          <span>activity & interests</span>
        </li>
        <li @click="changeCate('Articles')" class="tab" :class="{ active: nowCate === 'Articles' }">
          <span>Articles (3)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, { emit }) {
    const nowCate = ref("Profile");

    function changeCate(cate) {
      nowCate.value = cate;
      emit("changeCate", cate)
    }

    return { nowCate, changeCate };
  },
};
</script>

<style lang="scss" scoped>
.tab-area {
  border-bottom: 1px solid $border-gray-light;
  padding-top: 31px;
}
.tab-wrap {
  width: 85%;
  margin-right: auto;
  ul {
    display: flex;
    align-items: flex-end;
    width: 100%;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $border-gray-light;
    border-right: 1px solid $border-gray-light;
    border-radius: 4px 4px 0 0;
    padding-top: 15px;
    padding-bottom: 15px;
    height: 40px;
    width: 33.333333%;
    cursor: pointer;
    transition: 0.2s linear all;
    span {
      color: $text-dark;
      text-transform: uppercase;
    }
    &.active,
    &:hover {
      height: 50px;
      background: $linear-blue;
      span {
        color: #fff;
      }
    }
  }
}
</style>