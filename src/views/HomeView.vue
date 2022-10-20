<template>
  <section class="main-container full app-home">
    <div class="hero flex align-center justify-center column">
      <h1>Mister Bitcoin</h1>
      <p>a place to stash your hashed cash</p>
    </div>
  </section>
  <Features />
</template>

<script>
import Features from "../components/Features.vue"
export default {
  components: {
    Features,
  },
}
</script>
