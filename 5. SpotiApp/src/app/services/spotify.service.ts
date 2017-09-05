import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SpotifyService {
  static TOKEN: string = 'BQD0Mmb5oF3JynCMorjf7h4gvQ9bP_5nlOV54_ejGtupOZje6tUQNp8WK5y-O_juMgO7on0ajn2yLfpErGAGPA';

  urlSearch: string = 'https://api.spotify.com/v1/search';
  urlArtist: string = 'https://api.spotify.com/v1/artists/';
  artists: any[] = [];


  constructor(private http: Http) {
  }

  getArtists(q: string) {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${SpotifyService.TOKEN}`);

    let url = `${this.urlSearch}?q=${q}&type=artist`;

    return this.http
      .get(url, { headers: headers })
      .map((response) => {
        if (response.status == 401) {
          console.log('Renew the token');
          this.artists = [];
          return [];
        }
        this.artists = response.json().artists.items;

        return this.artists;
      });
  }

  getArtist(id: string) {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${SpotifyService.TOKEN}`);

    let url = `${this.urlArtist}${id}`;

    return this.http
      .get(url, { headers: headers })
      .map((response) => {
        let artist = response.json();
        console.log(artist)
        return artist;
      });
  }

  getTopTracks(artistId: string) {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${SpotifyService.TOKEN}`);

    let url = `${this.urlArtist}${artistId}/top-tracks?country=US`;

    return this.http
      .get(url, { headers: headers })
      .map((response) => {
        let topTracks = response.json();
        console.log(topTracks)
        return topTracks.tracks;
      });
  }

}
