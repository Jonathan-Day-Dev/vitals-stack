<template>
  <div>
    <NavLink url="/" name="Home" />
    <NavLink url="/ref" name="Reference" />
    <NavLink url="/guide" name="Walk-Through" />
    <NavLink url="/sequence" name="Sequence Diagram" />
    <NavLink url="/architecture" name="Architecture Diagram" />
    <NavLink url="/api" name="API" />
    <NavLink url="/entity" name="Entity Relationship" />
    <NavLink url="/wireframe" name="Wireframes" />
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
  @apply flex md:flex-col justify-evenly items-center h-14 sm:h-10 w-full md:h-screen bg-blue-600;
}
</style>