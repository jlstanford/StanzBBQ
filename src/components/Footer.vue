<template>
  <footer>
    <contact-link
      v-for="contact in contactOptions"
      v-bind:contact="contact.contactItem"
      v-bind:key="contact.id">
    </contact-link>
  </footer>
</template>

<script>
import ContactLink from './ContactLink.vue'
export default {
  components: {
    'contact-link': ContactLink  
  },
  data:() => {
    return {
      contactOptions: [
        {id: 0, contactItem: 'fb-link'},
        {id: 1, contactItem: 'instagram-link'},
        {id: 2, contactItem: '773-418-0681'}
      ]
    }
  }
}
</script>

<style>
    footer {
        display: grid;
    }
</style>
