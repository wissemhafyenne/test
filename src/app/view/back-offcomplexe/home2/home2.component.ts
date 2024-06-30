// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { SongService } from '../../../core/services/api/song.service';
import { AlbumService } from '../../../core/services/api/album.service';
import { PlaylistService } from '../../../core/services/api/playlist.service';
import { RadioService } from '../../../core/services/api/radio.service';

// Constant classes
import { HttpStatus } from '../../../core/constants/http-status';
import { Utils } from '../../../core/utils/utils';


@Component({
  selector: 'app-home',
  templateUrl: './home2.component.html'
})
export class HomeComponent implements OnInit {

  // Holds song data
  songs: any = [];

  // Holds trending song data
  trendingSongs: any = [];

  // Holds international song data
  internationalSongs: any = [];

  // Holds event data
  events: any = [];

  // Holds album data
  albums: any = [];

  // Holds playlist data
  playlist: any = [];

  // Holds radio data
  radios: any = [];

  constructor(
    private songService: SongService,
    private albumService: AlbumService,
    private playlistService: PlaylistService,
    private radioService: RadioService
  ) { }

  ngOnInit(): void {
    this.getSongs();
    this.getAlbums();
    this.getPlaylist();
    this.getRadios();
  }

  /**
   * Get song data from default json.
   */
  getSongs(): void {
    this.songService.getSongs().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        this.songs = response.data;
      }
    });
  }


  /**
   * Get album data from default json.
   */
  getAlbums(): void {
    this.albumService.getAlbums().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        const data = response.data;
        const divide = Math.ceil(data.length / 2);

        this.albums.push(data.splice(0, divide));
        this.albums.push(data.splice(-divide));
      }
    });
  }

  /**
   * Get playlist data from default json.
   */
  getPlaylist(): void {
    this.playlistService.getPlaylist().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        this.playlist = response.data;
      }
    });
  }

  /**
   * Get radio data from default json.
   */
  getRadios(): void {
    this.radioService.getRadios().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        this.radios = response.data;
      }
    });
  }

}
