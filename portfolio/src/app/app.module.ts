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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    NavbarComponent,
    DeveloppementComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'developpement', component: DeveloppementComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
