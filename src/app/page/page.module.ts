import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LocationComponent } from './location/location.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [HomeComponent, WhatWeDoComponent, AboutUsComponent, PortfolioComponent, LocationComponent, ContactsComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PageModule { }
