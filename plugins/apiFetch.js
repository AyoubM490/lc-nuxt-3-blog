import { defineNuxtPlugin } from '#app'
import Cookies from 'js-cookie'
import {ofetch} from "ofetch";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    nuxtApp.provide(
        'apiFetch',
        async (url, options = {} ) => {
            return await ofetch(url, {
                baseURL: 'http://localhost:8000',
                retry: 3,
                retryDelay: 500,
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
                },
                method: options?.method,
                body: options?.body
            })
        }
    )
})
