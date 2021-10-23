<template>
  <div>
    <h1>This is the Reference.vue file</h1>
    <ul>
      <li v-for="reference in referenceList" :key="reference.id">
        <a :href="reference.docs" target="_blank">{{ reference.name }}
        <p>{{ reference.desc }}</p></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      referenceList: [
        {
          id: "vue3",
          name: "Vue 3",
          desc: "A Javascript library that we will use for the frontend of the app",
          docs: "https://v3.vuejs.org/guide/introduction.html",
        },
        {
          id: "inertia",
          name: "InertiaJS",
          desc: "Used to create fully client-side rendered SPAs by leveraging existing frameworks like Vue",
          docs: "https://inertiajs.com/",
        },
        {
          id: "tailwind",
          name: "TailwindCSS",
          desc: "A powerful, utility first CSS framework",
          docs: "https://tailwindcss.com/docs",
        },
        {
          id: "axios",
          name: "Axios",
          desc: "A Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser",
          docs: "https://axios-http.com/docs/intro",
        },
        {
          id: "laravel",
          name: "Laravel",
          desc: "A PHP framework intended for the development of web applications following the model–view–controller",
          docs: "https://laravel.com/",
        },
        {
          id: "sql",
          name: "SQL",
          desc: "A domain specific language that is used to communicate with a database",
          docs: "https://www.sqlite.org/docs.html",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  @apply text-gray-300 mt-20 text-3xl text-center;
}
li {
  @apply bg-gray-300 text-center mx-64 mt-5 rounded;
}
li:hover {
    @apply bg-gray-600 text-gray-300;
}
li a {
  @apply text-xl block;
}
li a p {
    @apply text-lg;
}
</style>