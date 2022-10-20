<template>
  <span class="flex contact-preview">
    <Avatar :name="contact._id" />
    <div class="contact-ui">
      <h4>{{ contact.name }}</h4>
      <section class="flex column contact-btns">
        <button>
          <RouterLink :to="`/contact/${contact._id}`">details</RouterLink>
        </button>
        <button>
          <RouterLink :to="`/contact/edit/${contact._id}`">eidt</RouterLink>
        </button>
        <button>x</button>
      </section>
    </div>
  </span>
</template>

<script>
import Avatar from "./../components/Avatar.vue"
export default {
  props: {
    contact: {
      type: Object,
      requiered: true,
    },
  },
  components: {
    Avatar,
  },
}
</script>
