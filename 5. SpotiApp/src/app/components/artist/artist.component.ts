import { SpotifyService } from './../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  artist: any;
  tracks: any[];
  trackActive: any;

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.spotifyService.getArtist(params.id).subscribe(artist => this.artist = artist);

      this.spotifyService.getTopTracks(params.id).subscribe(tracks => this.tracks = tracks);
    });
  }

}
