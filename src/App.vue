<template>
  <section id="main-page">
    <TheNavbar />
    <main id="main-el">
      <router-view></router-view>
      <div
        id="breakpoints"
        class="fixed top-0 right-0 flex items-center justify-center w-6 h-6 p-3 m-8 font-mono text-xs text-white bg-gray-700 rounded-full sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500"
      >
        <div class="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div class="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
        <div class="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
        <div class="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
        <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>
    </main>
  </section>
</template>

<script>
import TheNavbar from "./components/nav/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#breakpoints {
  @apply fixed top-2 right-2;
}

#main-page {
  @apply md:grid md:grid-cols-6 md:gap-2;
}

#main-el {
  @apply w-full flex justify-center items-center md:col-span-5 md:col-start-2;
}
</style>
