<template>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <Navigation :nowRouteName="nowRouteName"></Navigation>
      <router-view/>
    <Footer />
</template>

<script>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navigation,
    Footer
  },
  setup() {
    const route = useRoute()
    const routePath = ["", "chat"]
    const nowRouteName = ref("")

    watch(
      () => route.path,
      val => {
        let path = val.substring(1)
        routePath.forEach(routeName => {
          if (path === routeName) {
            nowRouteName.value = routeName
          }
        })
      }
    )

    return { nowRouteName }
  },
}
</script>

<style lang="scss">
</style>
