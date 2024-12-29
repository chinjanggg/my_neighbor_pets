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
                    name: 'bobby',

                },
                {
                    id: 2,
                    name: 'charlie',
                },
                {
                    id: 3,
                    name: 'kaitoon',
                },
                {
                    id: 4,
                    name: 'manow',
                },
                {
                    id: 5,
                    name: 'meow',
                },
                {
                    id: 6,
                    name: 'maew',
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
                    filename: 'cat/alexandr-popadin-j-k1FEpdlqw-unsplash.jpg',
                    isDefaultImage: true,
                    petId: 1
                },
                {
                    id: 2,
                    filename: 'cat/andrew-umansky-l5truYNKmm8-unsplash.jpg',
                    isDefaultImage: true,
                    petId: 2
                },
                {
                    id: 3,
                    filename: 'cat/artur-kornakov-LP5tjtG8I68-unsplash.jpg',
                    isDefaultImage: true,
                    petId: 3
                },
                {
                    id: 4,
                    filename: 'cat/chris-tweten-ff5zmpoTLgs-unsplash.jpg',
                    isDefaultImage: true,
                    petId: 4
                },
                {
                    id: 5,
                    filename: 'cat/cyrus-chew-Dl39g6QhOIM-unsplash.jpg',
                    isDefaultImage: true,
                    petId: 5
                },
                {
                    id: 6,
                    filename: 'cat/elliotm-Pp6shZRYoh4-unsplash.jpg',
                    isDefaultImage: true,
                    petId: 6
                },
            ]
            for( const data of dataList ) {
                const image = new Image(
                    data.id,
                    data.filename,
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
