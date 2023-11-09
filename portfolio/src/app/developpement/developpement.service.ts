import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from '../core/card/card.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloppementService {


  private cardList: Card[]

  constructor() {
    this.cardList = [
      new Card("Jira", "Methodologie", "Backlog", new URL("/assets/dev/JIRA_Dashboard.png", environment.domain)),
      new Card("Jira", "Methodologie", "Planning", new URL("/assets/dev/JIRA_Planning.png", environment.domain)),
      new Card("GitHub", "Methodologie", "Repository", new URL("/assets/dev/GitHub_Repository.png", environment.domain)),
      new Card("GitHub", "Methodologie", "Workflows avec GitHub Actions", new URL("/assets/dev/GitHub_CICD.png", environment.domain)),
      new Card("Firebase", "Methodologie", "Deploiement sur Firebase Hosting", new URL("/assets/dev/Firebase.png", environment.domain)),
      new Card("Portfolio", "Methodologie", "Version deployée", new URL("/assets/dev/Portfolio_Deployed.png", environment.domain)),
      new Card("Portfolio", "Methodologie", "Version locale", new URL("/assets/dev/Portfolio_Local.png", environment.domain)),
      new Card("Squarespace", "Methodologie", "DNS", new URL("/assets/dev/Squarespace.png", environment.domain)),
      new Card("VSCode", "Methodologie", "Dev sur VSCode avec les extensions Jira et GitHub", new URL("/assets/dev/VSCode.png", environment.domain)),
    ]
  }


  public getDevCards(): Card[] {
    return this.cardList
  }
}
