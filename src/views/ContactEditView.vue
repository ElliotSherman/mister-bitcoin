<template>
  <section v-if="contact" class="main-container full">
    <h1>Edit Contact</h1>
    <input v-model="contact.name" type="text" />
    <input v-model="contact.email" type="email" />
    <input v-model="contact.phone" type="text" />
    <section>
      <label @click="onSave" class="btn-div-lbl">
        <div class="pointer">Save</div>
        <button class="button-icon btn-lable">
          <img src="./../../public/save.png" alt="" />
        </button>
      </label>
      <GoBack />
    </section>
  </section>
  <div v-else>Loading...</div>
</template>
<script>
import { contactService } from "./../services/contactService.js"
import GoBack from "../components/GoBackBtn.vue"
export default {
  data() {
    return {
      contact: null,
    }
  },
  methods: {
    async onSave() {
      await contactService.saveContact(this.contact)
      let reRoute = `/contact/${this.contact._id}`
      console.log("contactId", reRoute)
      this.$router.push(reRoute)
    },
  },
  async created() {
    const _id = this.$route.params._id
    this.contact = await contactService.getContactById(_id)
    console.log("ID", _id)
  },
  components: {
    GoBack,
  },
}
</script>
