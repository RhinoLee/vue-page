<template>
  <div class="projects-area">
    <div class="wrap vertical">
      <div class="title-wrap">
        <h2 class="title">projects</h2>
        <div class="count">
          <span>3 of 12</span>
        </div>
      </div>

      <div class="content">
        <div class="row">
          <div class="item col-3" v-for="project in projects.data" :key="project.title">
            <div class="pic">
              <a :href="project.link">
                <img :src="project.img" :alt="project.title" />
              </a>
            </div>
            <div class="info">
              <h3 class="title project-name">{{ project.title }}</h3>
              <span class="sub-title">{{ project.subTitle }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="more-wrap">
        <a href="#">show all (12)</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import projects_1 from "@/assets/images/pic/projects_1.png"
import projects_2 from "@/assets/images/pic/projects_2.png"
import projects_3 from "@/assets/images/pic/projects_3.png"
export default {
  setup() {
    const projects = reactive({ data: [] })
    projects.data = [
      {
        title: "zara redesign concept",
        subTitle: "UX/UI design, 15.07.2019",
        img: projects_1,
        link: "https://google.com",
      },
      {
        title: "SCTHON event brand identity",
        subTitle: "Graphic design, 03.31.2019",
        img: projects_2,
        link: "https://google.com",
      },
      {
        title: "Drozd. Brand identity. 2016",
        subTitle: "Graphic design, 03.04.2016",
        img: projects_3,
        link: "https://google.com",
      },
    ]

    return { projects }
  }
}
</script>

<style lang="scss" scoped>
.projects-area {
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: #fff;
  .title-wrap {
    display: flex;
  }
  h2.title {
    padding-right: 15px;
  }
  h3.title {
    text-transform: capitalize;
    margin-top: 15px;
  }
  span.sub-title {
    color: $text-dark;
  }
  .count {
    span {
      color: $text-gray;
      font-size: 18px;
    }
  }
  .content {
    a {
      display: block;
      overflow: hidden;
      img {
        transition: .8s linear all;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
  .more-wrap {
    margin-top: 25px;
  }
  .col-3 {
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>