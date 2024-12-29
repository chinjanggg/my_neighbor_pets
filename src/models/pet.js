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

    setDefaultImage( defaultImage ) {
        this.defaultImage = defaultImage
    }

    setImageList( imageList ) {
        self.imageList = imageList

        let defaultImage = self.imageList.find( image => image.isDefaultImage )
        if ( defaultImage === null ) {
            defaultImage = new Image(
                1,
                '@/assets/animal-shelter',
                'png',
                true,
                this.id
            )
        }
        this.defaultImage = defaultImage
    }
}
