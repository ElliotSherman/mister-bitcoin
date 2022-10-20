<template>
  <section class="main-container full contacts-view">
    <h1 class="title">My Contacts</h1>
    <ul class="clean-list grid contacts-list">
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
      </li>
    </ul>
  </section>
</template>

<script>
import { contactService } from "../services/contactService.js"
import ContactPreview from "./../components/ContactPreview.vue"
export default {
  data() {
    return {
      contacts: [],
    }
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
  components: {
    ContactPreview,
  },
}
</script>
