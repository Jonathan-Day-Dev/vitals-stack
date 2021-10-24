<template>
    <li>
        <a :href="link" target="_blank"
          ><span>{{ name }}</span>
          <p>{{ desc }}</p></a
        >
    </li>
</template>

<script>
export default {
    props: ['link', 'name', 'desc']
}
</script>

<style scoped>
li {
  @apply bg-gray-300 text-center w-60 rounded-xl mx-16 mb-6 p-6 border-2 border-gray-300 border-solid;
}
li:hover {
  @apply bg-gray-700 text-gray-300 border-2 border-green-700 border-solid;
}
li a {
  @apply text-xl block;
}
li a span {
  @apply text-green-700;
}
li a p {
  @apply text-lg;
}
</style>