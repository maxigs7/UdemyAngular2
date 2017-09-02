import { Hero, HeroService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: Hero;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroService: HeroService) {

    this._activatedRoute.params.subscribe(params => {
      this.hero = _heroService.getByIndex(params.id);
    });
  }

  ngOnInit() {

  }

}
