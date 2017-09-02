import { HeroService, Hero } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  query: string;

  heroes: Hero[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroService: HeroService,
    private _router: Router) {

    this._activatedRoute.params.subscribe(params => {
      this.heroes = _heroService.searchHero(params.q);
      this.query = params.q;
    });


  }

  ngOnInit() {
  }

  goHero(idx: number) {
    this._router.navigate(['/hero', idx]);
  }
}
