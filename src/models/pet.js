import Image from '@/models/image'

export default class Pet {
    id
    name
    houseId
    type
    color
    isLost
    defaultImage
    imageList

    constructor( id, name, houseId, type, color ) {
        this.id = id
        this.name = name
        this.houseId = houseId
        this.type = type
        this.color = color
    }

    setImageList( imageList ) {
        self.imageList = imageList

        this.setDefaultImage()
    }

    setDefaultImage() {
        let defaultImage = self.imageList.find( image => image.isDefaultImage )
        if ( defaultImage === undefined ) {
            defaultImage = new Image(
                1,
                'animal-shelter.png',
                true,
                this.id
            )
        }
        this.defaultImage = defaultImage
    }
}
