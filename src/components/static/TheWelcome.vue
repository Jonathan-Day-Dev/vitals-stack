<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <p>{{ desc }}</p>
        <BaseButton btnText="Get Started" />
    </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
    data() {
        return {
            title: "A Step By Step Guide to Building a VITALS Stack",
            subtitle: "Vue3, InertiaJS, TailwindCSS, Axios, Laravel and SQL",
            desc: "ENTER DESCRIPTION HERE"
        }
    },
    components: {
        BaseButton
    }
}
</script>

<style scoped>
div {
    @apply w-full;
}
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