import { defineStore } from 'pinia'
import Pet from '@/models/pet'
import Image from '@/models/image'

export const usePetStore = defineStore( 'pet', {
    state: () => ({
        petList: []
    }),
    actions: {
        loadDataList() {
            this.loadPetList()
            this.loadImageList()
        },

        loadPetList() {
            const imageList = this.loadImageList()
            const dataList = [
                {
                    id: 1,
                    defaultImg: '@/assets/animal-shelter.png',
                    name: 'a',

                },
                {
                    id: 2,
                    defaultImg: '@/assets/animal-shelter.png',
                    name: 'b',
                },
                {
                    id: 3,
                    defaultImg: '@/assets/animal-shelter.png',
                    name: 'c',
                },
                {
                    id: 4,
                    defaultImg: '@/assets/animal-shelter.png',
                    name: 'd',
                },
                {
                    id: 5,
                    defaultImg: '@/assets/animal-shelter.png',
                    name: 'e',
                },
                {
                    id: 6,
                    defaultImg: '@/assets/animal-shelter.png',
                    name: 'f',
                }
            ]

            for( const data of dataList ) {
                const pet = new Pet(
                    data.id,
                    data.name,
                    data.houseId,
                    data.type,
                    data.color
                )
                const petImageList = imageList.filter( image => image.petId === pet.id )
                pet.setImageList( petImageList )
                this.petList.push( pet )
            }
        },

        loadImageList() {
            const imageList = []
            const dataList = [
                {
                    id: 1,
                    filename: 'test',
                    fileExtension: 'png',
                    isDefaultImage: true,
                    petId: 1
                }
            ]
            for( const data of dataList ) {
                const image = new Image(
                    data.id,
                    data.filename,
                    data.fileExtension,
                    data.isDefaultImage,
                    data.petId
                )
                imageList.push( image )
            }
            return imageList
        }
    },
    getters: {
        numPet() {
            return this.petList.length
        }
    }
})
