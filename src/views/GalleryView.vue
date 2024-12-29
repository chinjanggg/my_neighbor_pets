<template>
    <div>
        <v-container>
            <v-row justify="end">
                <v-col cols="2">
                    <v-autocomplete
                        v-model="group"
                        label="Group by"
                        :items="groupList" />
                </v-col>

                <v-col cols="2">
                    <v-autocomplete
                        v-model="sort"
                        label="Sort by"
                        :items="sortList" />
                </v-col>
            </v-row>
        </v-container>

        รวมสัตว์เลี้ยงทั้งของลูกบ้าน ทั้งพันธุ์ john jud

        <v-container>
            <v-row v-for="rowNum in numRows" v-bind:key="rowNum">
                <v-col v-for="colNum in numItemPerRow" v-bind:key="dataList[( ( rowNum - 1 ) * numItemPerRow) + colNum - 1].id">
                    <pet-card-item :pet="dataList[( ( rowNum - 1 ) * numItemPerRow) + colNum - 1]" />
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script setup>

import { computed, ref } from 'vue'
import { usePetStore } from '@/stores/pet'
import PetCardItem from '@/components/PetCardItem.vue'

const petStore = usePetStore()

const groupList = ref([
    'type',
    'house'
])

const sortList = ref([
    'type',
    'house',
    'name',
    'color'
])

const group = ref('house')
const sort = ref('name')

const numItemPerRow = ref(3)

petStore.loadPetList()
const dataList = ref(petStore.petList.sort( ( a, b ) => a[sort.value].toLocaleLowerCase().localeCompare(b[sort.value].toLocaleLowerCase())))

const numRows = computed(() => Math.ceil( dataList.value.length / numItemPerRow.value ) )

</script>

<style>
.petImg {
    max-width: 200px;
}
</style>
