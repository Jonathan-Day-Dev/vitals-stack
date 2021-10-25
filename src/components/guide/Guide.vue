<template>
    <div>
        <Step 
            stepNum="1" 
            instruction= "Set up Laravel using composer" 
            location="Terminal:"
            codeBlock="composer create-project --prefer-dist laravel/laravel <- project name ->"
        />
    </div>    
</template>

<script>
import Step from './Step.vue';
export default {
    components: {
        Step
    }
}
</script>

<style scoped>
h1 {
    @apply text-gray-300 mt-20 text-3xl text-center;
}
</style>