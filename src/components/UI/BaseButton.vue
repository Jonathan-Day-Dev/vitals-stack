<template>
    <button>{{ btnText }}</button>
</template>

<script>
export default {
    props: ['btnText']
}
</script>

<style scoped>
button {
    @apply bg-gray-300 py-2 px-3 border-2 border-gray-400 border-solid mx-auto block mt-5;
}
button:hover {
    @apply cursor-pointer bg-red-200 border-red-300;
}
</style>