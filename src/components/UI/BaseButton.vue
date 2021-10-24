<template>
    <router-link :to="url"><slot>{{ btnText }}</slot></router-link>
</template>

<script>
export default {
    props: ['url', 'btnText']
}
</script>

<style scoped>
a {
    @apply bg-gray-300 py-2 px-3 border-2 border-gray-400 border-solid mt-5;
}
a:hover {
    @apply cursor-pointer bg-red-200 border-red-300;
}
</style>