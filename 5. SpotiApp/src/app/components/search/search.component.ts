import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  query: string = '';

  artists: any[] = [];

  request: Subscription;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.artists = this.spotifyService.artists;
  }

  searchArtists() {
    if (!this.query) return;
    console.log(this.request)
    if (this.request && !this.request.closed) {
      this.request.unsubscribe();
    }

    this.request = this.spotifyService.getArtists(this.query)
      .subscribe((artists) => {
        this.artists = artists;
        console.log(artists);
      });

  }

}
