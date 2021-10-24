<template>
    <div>
        <h1>A Step By Step Guide to Building a VITALS Stack</h1>
        <h2>Vue3, InertiaJS, TailwindCSS, Axios, Laravel and SQL</h2>
        <p>ENTER DESCRIPTION HERE</p>
        <BaseButton btnText="Get Started" />
    </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
    components: {
        BaseButton
    }
}
</script>

<style scoped>
h1 {
    @apply text-red-700 text-center mt-16 py-4 text-3xl font-bold;
}
h2 {
    @apply text-red-700 text-center text-2xl;
}
p {
    @apply bg-gray-300 border-2 border-green-700 border-solid mx-20 mt-3 p-5;
}
</style>