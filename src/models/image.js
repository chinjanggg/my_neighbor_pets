export default class Image {
    id
    filename
    fileExtension
    isDefaultImage
    petId

    constructor( id, filename, fileExtension, isDefaultImage, petId ) {
        this.id = id
        this.filename = filename
        this.fileExtension = fileExtension
        this.isDefaultImage = isDefaultImage
        this.petId = petId
    }
}
