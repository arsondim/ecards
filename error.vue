<template>
    <div>

        <h1>ERROR</h1>
        <p>{{ error.statusCode }}</p>
        <p>{{ error.message }}</p>

        <button class="btn" @click="backHome"> Wróc </button>

    </div>
</template>

<script setup>
defineProps(['error'])
const backHome = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

</style>