<template>
  <div class="container hide" :class="{ show: isShow }">
    <div class="main-area">
      <Profile></Profile>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
    </div>
    <div class="side-area">
      <Dashboard></Dashboard>
      <Victors></Victors>
      <Courses></Courses>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>

<script>
import Profile from "@/components/index/Profile.vue"
// import Tab from "@/components/index/Tab.vue"
import About from "@/components/index/About.vue"
import Projects from "@/components/index/Projects.vue"
import Skills from "@/components/index/Skills.vue"
import Experience from "@/components/index/Experience.vue"
import Education from "@/components/index/Education.vue"
import Dashboard from "@/components/index/Dashboard.vue"
import Victors from "@/components/index/Victors.vue"
import Courses from "@/components/index/Courses.vue"
import { ref, onMounted, onBeforeUnmount } from "vue"
export default {
  components: {
    Profile,
    // Tab,
    About,
    Projects,
    Skills,
    Experience,
    Education,
    Dashboard,
    Victors,
    Courses
  },
  setup() {
    const isShow = ref(false)
    let timer = null
    onMounted(() => {
      timer = setTimeout(() => {
        isShow.value = true
      }, 500)
    })

    onBeforeUnmount(() => {
      isShow.value = false
      clearTimeout(timer)
    })

    return { isShow }
  }
}
</script>
