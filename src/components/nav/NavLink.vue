<template>
    <router-link :to="url">{{ name }}</router-link>
</template>

<script>
export default {
    props: ['url', 'name']
}
</script>

<style scoped>
a {
    @apply text-gray-300 text-xl w-3/4 px-2 py-3;
}

a:hover {
  @apply bg-blue-900;
}
</style>