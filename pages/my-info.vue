<script setup>
import {ofetch} from "ofetch";

definePageMeta({
    middleware: ["auth"]
})

const { $apiFetch } = useNuxtApp()

const title = useState('title')
const user = ref(null)
const posts = ref([])
let errors = ref(null)

onMounted(async () => {
    user.value = await $apiFetch('/api/user').catch(err => errors = err)

    posts.value = await $apiFetch('/api/user/posts').catch(err => errors = err)
})
</script>

<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title>My Info | {{ title }}</Title>
        <div v-if="errors">
            Sorry, You need to login
        </div>
        <div v-if="!errors">
            <div>Name: {{ user?.name }}</div>
            <div>Email: {{ user?.email }}</div>
        </div>

        <div v-if="!errors" class="mt-4">
            <h3 class="text-2xl">My Posts</h3>
            <ul v-if="posts.length > 0">
                <li v-for="post in posts" :key="post.id">
                    <NuxtLink
                        :to="`/posts/${post.id}`"
                        class="text-blue-600 hover:underline"
                    >{{ post.title }}</NuxtLink>
                    &middot;
                    <NuxtLink
                        :to="`/posts/${post.id}/edit`"
                        class="text-blue-600 hover:underline"
                    >Edit</NuxtLink>
                </li>
            </ul>
            <div v-if="posts.length === 0">
                You have no posts
            </div>
        </div>
    </div>
</template>
