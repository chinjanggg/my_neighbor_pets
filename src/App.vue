<template>
    <v-layout>
        <appbar />

        <v-main>
            <RouterView />
        </v-main>
    </v-layout>
</template>

<script setup>
import Appbar from '@/components/Appbar.vue'
</script>
