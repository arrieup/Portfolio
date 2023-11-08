import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private technoList: Card[]
  private devList: Card[]
  deployDomain = "https://pabloarrieumerlou.com/"
  testDomain = "http://localhost:4200/"


  constructor() {
    this.technoList = [
      new Card("Angular", "Technologie", "Connaissance du framework web", new URL("/assets/logos/Angular.png", this.deployDomain)),
      new Card("PHP", "Technologie", "Développement en PHP", new URL("/assets/logos/PHP.png", this.deployDomain)),
      new Card("Java", "Technologie", "Différents environnements maîtrisés", new URL("/assets/logos/Java.png", this.deployDomain)),
      new Card("Javascript", "Technologie", "Différents environnements maîtrisés", new URL("/assets/logos/JS.png", this.deployDomain))
    ];
    this.devList = [
      new Card("Jira", "Methodologie", "Backlog", new URL("/assets/dev/JIRA_dashboard.png", this.deployDomain)),
      new Card("Jira", "Methodologie", "Planning", new URL("/assets/dev/JIRA_planning.png", this.deployDomain)),
      new Card("GitHub", "Methodologie", "Repository", new URL("/assets/dev/GitHub_Repository.png", this.deployDomain)),
      new Card("GitHub", "Methodologie", "Workflows avec GitHub Actions", new URL("/assets/dev/GitHub_CICD.png", this.deployDomain)),
      new Card("Firebase", "Methodologie", "Deploiement sur Firebase Hosting", new URL("/assets/dev/Firebase.png", this.deployDomain)),
      new Card("Portfolio", "Methodologie", "Version deployée", new URL("/assets/dev/Portfolio_deployed.png", this.deployDomain)),
      new Card("Portfolio", "Methodologie", "Version locale", new URL("/assets/dev/Portfolio_local.png", this.deployDomain)),
      new Card("Squarespace", "Methodologie", "DNS", new URL("/assets/dev/Squarespace.png", this.deployDomain)),
      new Card("VSCode", "Methodologie", "Dev sur VSCode avec les extensions Jira et GitHub", new URL("/assets/dev/VSCode.png", this.deployDomain)),
    ]
  }

  public getTechnoCards(): Card[] {
    return this.technoList
  }

  public getDevCards(): Card[] {
    return this.devList
  }

}
