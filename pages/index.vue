<script setup lang="ts">

const { $apiFetch } = useNuxtApp()

const posts = await $apiFetch('/api/posts').catch(err => console.log(err))

</script>

<template>
    <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
        <PostItem v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<style scoped>

</style>
