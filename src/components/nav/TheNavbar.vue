<template>
  <div>
    <NavLink url="/" name="Home" />
    <NavLink url="/ref" name="Reference" />
    <NavLink url="/guide" name="Guide" />
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
export default {
  components: {
    NavLink,
  },
};
</script>

<style scoped>
div {
  @apply flex flex-col justify-evenly items-center h-screen bg-blue-600;
}
</style>