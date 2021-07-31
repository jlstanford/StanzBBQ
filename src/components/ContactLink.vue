<template>
  <div class="contact-link">
      {{contact}}
  </div>
</template>

<script>
export default {
  props: ['contact']
}
</script>

<style>
.contact-link {
  grid-row: 1;
}
</style>