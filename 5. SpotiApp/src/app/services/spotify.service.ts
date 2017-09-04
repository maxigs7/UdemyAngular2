import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  urlSearch: string = 'https://api.spotify.com/v1/search';
  artists: any[] = [];


  constructor(private http: Http) { }

  getArtists(q: string) {
    let url = `${this.urlSearch}?q=${q}&type=artist`;

    return this.http.get(url)
      .map((response) => {

      });
  }

}
