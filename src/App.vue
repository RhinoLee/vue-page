<template>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <Navigation />
      <router-view/>
    <Footer />
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navigation,
    Footer
  },
  setup() {
    
  },
}
</script>

<style lang="scss">
</style>
