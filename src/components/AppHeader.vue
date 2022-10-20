<template>
  <header class="app-header main-container full">
    <div class="flex space-between align-center">
      <RouterLink class="logo flex align-center" to="/">
        <img src="../../logo.png" />
        <h1>mister bitcoin</h1>
      </RouterLink>

      <nav class="flex align-center">
        <!-- <RouterLink to="/">login</RouterLink> -->
        <RouterLink to="/contact">My Contacts</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>
