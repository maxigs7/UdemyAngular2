import { HeroService, Hero } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private _heroService: HeroService,
    private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroService.getAll();
  }

  goHero(idx: number) {
    this._router.navigate(['/hero', idx]);
  }
}
