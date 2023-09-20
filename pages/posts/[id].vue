<script setup lang="ts">

import {ofetch} from "ofetch";
import {format} from 'date-fns'

const title = useState('title')
const route = useRoute()

const {$apiFetch} = useNuxtApp()

// const post = await ofetch(`https://lc-nuxt-3-blog-laravel.test/api/posts/${route.params.id}`, {
//     retry: 10,
//     retryDelay: 500
// }).catch(err => console.log(err))

const post = await $apiFetch(`/api/posts/${route.params.id}`).catch(err => console.log(err))

</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>{{ post?.title }} | {{ title }}</Title>
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/${$route.params.id}`">{{ post?.title }}</NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>{{ format(new Date(post?.created_at), 'MMMM dd, yyyy') }}</div>
      <div>&middot;</div>
      <div>{{ post?.user.name }}</div>
    </div>
    <div class="post-content mt-4">
        {{
            post?.body
        }}
    </div>
  </div>
</template>

<style scoped>

</style>
