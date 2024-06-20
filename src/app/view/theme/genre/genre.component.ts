// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { GenreService } from './../../../core/services/api/genre.service';

// Constant classes
import { HttpStatus } from 'src/app/core/constants/http-status';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {

  // Holds genre data
  genres: any = [];

  constructor(
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  /**
   * Get genre data from default json.
   */
  getGenres(): void {
    this.genreService.getGenres().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        this.genres = response.data;
      }
    });
  }

}
