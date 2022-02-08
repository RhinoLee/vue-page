<template>
  <div class="dashboard-area">
    <div class="box">
      <div class="title-area">
        <h3 class="title">your dashboard</h3>
        <a href="#">GO TO STATS</a>
      </div>
      <div class="count-area">
        <ul>
          <li>
            <span class="count">{{ viewsCount }}</span>
            <span class="cate">views today</span>
          </li>
          <li>
            <span class="count">{{ postsCount }}</span>
            <span class="cate">posts views</span>
          </li>
          <li>
            <span class="count">{{ searchCount }}</span>
            <span class="cate">search appereances</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, onBeforeUnmount } from "vue";
export default {
  setup() {
    const counts = {
      viewsCount: 367,
      postsCount: 15,
      searchCount: 9,
    };

    const viewsCount = ref(0);
    const postsCount = ref(0);
    const searchCount = ref(0);

    let viewsTimeout = null;
    let postsTimeout = null;
    let searchTimeout = null;

    function countHandler(cate, count, timer) {
      timer = setInterval(() => {
        if (cate.value < count) {
          cate.value += 2;
        } else {
          cate.value = count;
          clearInterval(timer);
        }
      }, (0.5 / count) * 2000);
    }

    onMounted(() => {
      countHandler(viewsCount, counts.viewsCount, viewsTimeout);
      countHandler(postsCount, counts.postsCount, postsTimeout);
      countHandler(searchCount, counts.searchCount, searchTimeout);
    });

    onBeforeUnmount(() => {
      clearInterval(viewsTimeout);
      clearInterval(postsTimeout);
      clearInterval(searchTimeout);
    });

    return { viewsCount, postsCount, searchCount };
  },
};
</script>

<style lang="scss" scoped>
.dashboard-area {
  .count-area {
    padding-top: 20px;
    li {
      & + li {
        padding-top: 18px;
      }
      .count {
        display: flex;
        flex-direction: column;
        font-size: 52px;
        font-weight: bold;
        color: $text-blue;
      }
    }
  }
}
</style>