<template>
  <div>
    <ul>
      <BaseRefContainer 
        v-for="reference in referenceList" 
        :key="reference.id"
        :link="reference.docs"
        :name="reference.name"
        :desc="reference.desc"
    />
    </ul>
  </div>
</template>

<script>
import BaseRefContainer from "../ref/BaseRefContainer";
export default {
  components: {
    BaseRefContainer,
  },
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
          docs: "https://laravel.com/docs/8.x",
        },
        {
          id: "sql",
          name: "SQL",
          desc: "A domain specific language that is used to communicate with a database",
          docs: "https://www.sqlite.org/docs.html",
        },
      ],
    };
  }
};
</script>

<style scoped>
ul {
  @apply flex flex-wrap justify-evenly mt-20;
}
</style>