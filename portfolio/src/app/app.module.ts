import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ProjetComponent } from './projets/projet/projet.component';
import { FormationComponent } from './formations/formation/formation.component';
import { ProjetListComponent } from './projets/projet-list/projet-list.component';
import { ProjetsComponent } from './projets/projets.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    FormationComponent,
    ProjetListComponent,
    ProjetsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
