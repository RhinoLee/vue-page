<template>
  <div class="container">
    <div class="main-area">
      <Profile></Profile>
      <!-- <Tab></Tab> -->
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
  max-width: 1920px;
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
  }
}
</script>
