<template>
    <header>
      <img v-bind:src = "img"> <!-- TODO: make this the logo daddy described--> 
      <h1 id="title">{{ title }}</h1> <!-- TODO: make this the smoke word image from the sketch-->
      <nav id="hamburger-menu">
        <ul>
          <hamburger-menu-item
            v-for="item in menuItems"
            v-bind:menu="item.item"
            v-bind:key="item.id">
          </hamburger-menu-item>
        </ul>
      </nav>
    </header>
</template>
    
<script>
import HamburgerMenuItem from './HamburgerMenuItem.vue'
export default {
  components: {
      'hamburger-menu-item': HamburgerMenuItem
  },
  data: () => {
    return {
      title: 'Stanz BBQ',
      menuItems: [
        {id: 0, item: 'Home'},
        {id: 1, item: 'About'},
        {id: 2, item: 'Contact'},
        {id: 3, item: 'Menu'},
        {id: 4, item: 'Locations'}
      ]
    }
  }
}
</script>

<style>
  header {
      display: grid;
  }
  #title {
      grid-row: 1;
  }
  #hamburger-menu {
      grid-row: 1;
  }
</style>
}