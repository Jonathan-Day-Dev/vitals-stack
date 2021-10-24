<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <p>{{ desc }}</p>
    <p>{{ xtraInfo }}</p>
    <BaseButton btnText="Get Started" to="/guide" />
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  data() {
    return {
      title: "A Step By Step Guide to Building a VITALS Stack",
      subtitle: "Vue3, InertiaJS, TailwindCSS, Axios, Laravel and SQL",
      desc: "This page is dedicated to teaching you how to build your own fullstack web app using a stack named VITALS. VITALS uses Vue 3 for its frontend and client-side routing, InertiaJS as an API to connect the frontend and backend, TailwindCSS for syling components, Axios for server-side routing, Laravel for the backend and SQL as a database.",
      xtraInfo: "Click on the Reference tab to access the documentation for each of these technologies or click the Guide tab to go through a tutorial for setting up your own VITALS app!"
    };
  },
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
div {
  @apply w-full flex flex-col justify-center items-center;
}
h1 {
  @apply text-red-700 text-center mt-16 py-4 sm:text-xl lg:text-3xl xl:text-4xl font-bold;
}
h2 {
  @apply text-red-700 text-center sm:text-base lg:text-2xl;
}
p {
  @apply bg-gray-300 border-2 border-green-700 border-solid sm:mx-10 lg:mx-20 mt-3 p-5;
}
</style>