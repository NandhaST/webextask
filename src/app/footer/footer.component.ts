import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

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
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  menus: any = [
    { "name": "Home", "url": "home" },
    { "name": "What We Do", "url": "what_we_do" },
    { "name": "About Us", "url": "about_us"},
    { "name": "Portfolio", "url": "portfolio" },
    { "name": "Location", "url": "location" },
    { "name": "Contacts", "url": "contacts" }
  ]

  menuLink(url: any) {
    this.router.navigate([`${url}`])
  }

}
