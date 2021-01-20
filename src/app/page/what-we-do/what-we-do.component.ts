import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("What We Do");

  }

  ngOnInit(): void {
  }

}
