<template>
    <div>
        <p id="step-number">Step {{ stepNum }}</p>
        <p id="instruction">{{ instruction }}</p>
        <p id="location">{{ location }}</p>
        <code>{{ codeBlock }}</code>
        <section>
            <BaseButton url="/" >Next</BaseButton>
        </section>
    </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
    components: {
        BaseButton
    },
    props: ['stepNum', 'instruction', 'codeBlock', 'location']
}
</script>

<style scoped>
div {
    @apply flex flex-col w-full mx-10 bg-gray-300 rounded p-5;
}

code {
    @apply bg-gray-800 text-gray-300 px-2 py-3;
}

section {
    @apply flex justify-evenly items-center;
}

#step-number {
    @apply text-2xl underline;
}

#instruction {
    @apply border-b-2 border-gray-800 border-solid pb-4 mb-2;
}
</style>