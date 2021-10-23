<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/ref">Reference</router-link>
        <router-link to="/guide">Guide</router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 10vh;
        width: 100%;
        background-color: rgb(61, 61, 163);
    }

    a {
        color: white;
        font-size: 24px;
    }
</style>