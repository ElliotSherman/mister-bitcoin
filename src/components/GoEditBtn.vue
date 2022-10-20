<template>
  <label @click="onGoEdit" class="btn-div-lbl">
    <div class="pointer">Edit</div>
    <button class="button-icon btn-lable">
      <img src="./../../public/edit.png" alt="" />
    </button>
  </label>
</template>

<script>
export default {
  methods: {
    onGoEdit() {
      // this.$router.push(_id)
      console.log("ID", this)
    },
  },
  props: {
    _id: {
      type: String,
      required: true,
    },
  },
}
</script>
