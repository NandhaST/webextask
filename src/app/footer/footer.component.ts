import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  menus: any = [
    { "name": "Home", "url": "home" },
    { "name": "What We Do", "url": "what_we_do" },
    { "name": "About Us", "url": "about_us" },
    { "name": "Portfolio", "url": "portfolio" },
    { "name": "Location", "url": "location" },
    { "name": "Contacts", "url": "contacts" }
  ]

  menuLink(url: any) {
    this.router.navigate([`${url}`])
  }

}
