<template>
    <div class="authorize">
        <v-text-field
            v-model="passcode"
            label="passcode"
            prepend-icon="key_vertical" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const passcode = ref('')

</script>

<style>
.authorize {
    align-content: center;
    justify-content: center;
}
</style>
