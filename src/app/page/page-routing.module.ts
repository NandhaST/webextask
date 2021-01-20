import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'what_we_do',
    component: WhatWeDoComponent
  },
  {
    path: 'about_us',
    component: AboutUsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
