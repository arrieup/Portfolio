import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardList: Card[]

  constructor() {
    console.log(new URL("../assets/logos/Java.png", "http://localhost:4200/"));

    this.cardList = [
      new Card("Angular", "Technologie", "Connaissance du framework web", new URL("../assets/logos/Angular.png", "http://localhost:4200/")),
      new Card("PHP", "Technologie", "Développement en PHP", new URL("../assets/logos/PHP.png", "http://localhost:4200/")),
      new Card("Java", "Technologie", "Différents environnements maîtrisés", new URL("../assets/logos/Java.png", "http://localhost:4200/")),
      new Card("Javascript", "Technologie", "Différents environnements maîtrisés", new URL("../assets/logos/JS.png", "http://localhost:4200/"))
    ]
  }

  public getCards(): Card[] {
    return this.cardList
  }

}
