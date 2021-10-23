<template>
  <TheNavbar />
  <Welcome />
</template>

<script>
import Welcome from './components/static/Welcome.vue';
import TheNavbar from './components/nav/TheNavbar.vue';
export default {
  components: {
    Welcome,
    TheNavbar,
  }
}
</script>

<style>

</style>
