<template>
    <v-layout>
        <app-bar />

        <v-main>
            <RouterView />
        </v-main>
    </v-layout>
</template>

<script setup>
import AppBar from '@/components/Appbar.vue'
</script>
