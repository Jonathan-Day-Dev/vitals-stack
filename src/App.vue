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

</style>
