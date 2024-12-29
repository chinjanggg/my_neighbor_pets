export default class Image {
    id
    filename
    isDefaultImage
    petId

    constructor( id, filename, isDefaultImage, petId ) {
        this.id = id
        this.filename = filename
        this.isDefaultImage = isDefaultImage
        this.petId = petId
    }
}
