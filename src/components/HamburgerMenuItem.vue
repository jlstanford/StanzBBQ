<template>
  <div id='hamburger-menu-item'>
      {{menu}}
  </div>
</template>

<script>
export default {
  props: ['menu']
}
</script>

<style>
  hambuger-menu-item {
      border: 1px solid blue;
  }
</style>
