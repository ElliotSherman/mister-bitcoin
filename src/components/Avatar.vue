<template>
  <img class="avatar" :src="`https://robohash.org/${name}`" alt="" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      requiered: true,
    },
  },
}
</script>

<style>
.avatar {
  max-height: 100%;
  /* display: inline; */
}
</style>
