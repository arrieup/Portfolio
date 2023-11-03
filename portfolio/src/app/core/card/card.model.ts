export class Card {
    title: string;
    type: string;
    description?: string;
    image?: URL;
    constructor(title: string, type: string, description?: string, image?: URL) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.image = image;
    }
}
