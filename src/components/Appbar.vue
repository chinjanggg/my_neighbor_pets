<template>
    <v-app-bar>
        <v-app-bar-title>My Neighbor Pets</v-app-bar-title>
        <v-btn v-for="button in menuList" v-bind:key="button.label" @click="redirect(button.path)">
            {{ button.label }}
        </v-btn>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = ref([
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Gallery',
        path: '/gallery',
    },
    {
        label: 'Lost And Found',
        path: '/lostnfound',
    },
    {
        label: 'Authorize',
        path: '/authorize',
    },
])

function redirect(path) {
    router.push(path)
}
</script>
