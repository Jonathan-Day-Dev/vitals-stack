<template>
  <TheNavbar />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavbar from './components/nav/TheNavbar.vue';
export default {
  components: {
    TheNavbar,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
