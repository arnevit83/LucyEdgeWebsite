
import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/app.Header';
import { FooterComponent } from './Footer/app.Footer';
import { NavComponent } from './Nav/app.Nav';
import { PageNotFoundComponent } from './PageNotFound/app.PageNotFound';

import { HomeComponent } from './ContentArea/app.Home';
import { ReferencesComponent } from './ContentArea/app.References';
import { ClientsComponent } from './ContentArea/app.Clients';
import { ExperienceComponent } from './ContentArea/app.Experience';
import { InterestsComponent } from './ContentArea/app.Interests';
import { ContactComponent } from './ContentArea/app.Contact';
import { LovesComponent } from './ContentArea/app.Loves';



import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientsComponent,
    ReferencesComponent,
    ExperienceComponent,
    InterestsComponent,
    LovesComponent,
    ContactComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
