import {useAuth} from "~/composables/useAuth.js";

export default defineNuxtRouteMiddleware((to, from) => {
    const {isLoggedIn} = useAuth()
    console.log(isLoggedIn)
    if (!isLoggedIn.value) {
        // window.location.pathname = '/login'
        return navigateTo('/login')
    }
})
