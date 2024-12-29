<template>
    <v-card
        max-width="300"
        max-height="300"
        :title="pet.name"
        :image="imageUrl" >
    </v-card>
</template>

<script setup>
import { computed } from 'vue'
import Pet from '@/models/pet'

const props = defineProps({
    pet: Pet
})

const imagePath = `../assets/${props.pet.defaultImage.filename}`
const imageUrl = computed( () => new URL(imagePath, import.meta.url).href )

</script>
