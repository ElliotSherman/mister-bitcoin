<template>
  <div>
    <AppHeader />
    <section class="router-view-container">
      <RouterView />
    </section>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  components: { AppHeader, AppFooter },
}
</script>

<style lang="scss">
.router-view-container {
  padding: 0;
  height: calc(100vh - 140px);
}
</style>
