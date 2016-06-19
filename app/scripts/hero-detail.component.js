import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'pages/hero-detail.component.html',
  styleUrls: ['styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    heroService: HeroService,
    routeParams: RouteParams) {
      this.heroService = heroService;
      this.routeParams = routeParams;
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.heroService.getHero(id)
          .then((hero: Hero) => this.hero = hero);
    } else {
      this.navigated = false;
      this.hero = new Hero();
    }
  }
  save() {
    this.heroService
        .save(this.hero)
        .then((hero: Hero) => {
          this.hero = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch((error: any) => this.error = error); // TODO: Display error message
  }
  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
