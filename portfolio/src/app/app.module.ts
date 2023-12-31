import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CardComponent } from './core/card/card.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DeveloppementComponent } from './developpement/developpement.component';
import { TechnologieComponent } from './technologie/technologie.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    NavbarComponent,
    DeveloppementComponent,
    TechnologieComponent,
    ContactComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'technologies', component: TechnologieComponent },
      { path: 'developpement', component: DeveloppementComponent },
      { path: 'contact', component: ContactComponent },
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
