<template>
  <section v-if="contact" class="main-container contact-details-view">
    <div class="contact-details">
      <div class="flex space-between">
        <h1 class="contact-name">{{ contact.name }}</h1>
        <GoEditBtn :id="contact._id" />
        <GoBackBtn @click="goBack" />
      </div>
      <div class="hr-divider"></div>
      <div class="flex contact-info">
        <Avatar :name="contact._id" />
        <div class="flex column contact-text">
          <h3 class="contact-text-title">Contact info</h3>
          <img
            class="button-icon"
            src="../../public/email.png"
            alt="email logo"
          />
          <h4>{{ contact.email }}</h4>
          <img
            class="button-icon"
            src="../../public/phone.png"
            alt="email logo"
          />
          <h4>{{ contact.phone }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { contactService } from "./../services/contactService.js"
import Avatar from "./../components/Avatar.vue"
import GoBackBtn from "../components/GoBackBtn.vue"
import GoEditBtn from "./../components/GoEditBtn.vue"
export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const contactId = this.$route.params._id
    this.contact = await contactService.getContactById(contactId)
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  components: {
    Avatar,
    GoBackBtn,
    GoEditBtn,
  },
}
</script>
