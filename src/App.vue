
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header-cmp id="header"></header-cmp>
    <router-view/>
    <footer-cmp ></footer-cmp>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'header-cmp': Header,
    'footer-cmp': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
