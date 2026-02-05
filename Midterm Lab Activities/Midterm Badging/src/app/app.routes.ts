import { AboutComponent } from './about-component/about-component';
import { HomeComponent } from './home-component/home-component';
import { Routes } from '@angular/router';
import { ServicesComponent } from './services-component/services-component';
import { ContactComponent } from './contact-component/contact-component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];
