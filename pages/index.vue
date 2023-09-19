<script setup lang="ts">

// let {data: posts, status, error} = await useFetch(() => '/api/posts', {
//     baseURL: 'https://lc-nuxt-3-blog-laravel.test',
// })
import {ofetch} from "ofetch";

const {posts} = await ofetch("https://lc-nuxt-3-blog-laravel.test/api/posts", {
    retry: 3,
    retryDelay: 500
}).then(res => res.json()).catch(err => console.log(err))
</script>

<template>
    <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
        <PostItem v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<style scoped>

</style>
