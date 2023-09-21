import {useAuth} from "~/composables/useAuth.js";

export default defineNuxtRouteMiddleware((to, from) => {
    const {isLoggedIn} = useAuth()
    if (isLoggedIn.value) {
        // window.location.pathname = '/my-info'
        return navigateTo('/login')
    }
})
