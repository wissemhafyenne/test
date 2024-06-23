import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from './../../../../core/services/design/player.service';
import { FavoriteService } from './favorite.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
})
export class ListViewComponent implements OnInit {

  @Input() data: any;
  @Input() viewDropdown: boolean = true;
  @Input() viewPlayButton: boolean = true;
  @Input() viewQueueOptions: boolean = true;
  @Input() viewFavorite: boolean = true;
  @Input() viewPlaylist: boolean = true;
  @Input() viewDownload: boolean = false;
  @Input() viewTime: boolean = true;

  constructor(
    private playerService: PlayerService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {}

  play(event: any): void {
    this.playerService.songPlayPause(event, this.data);
  }

  toggleFavorite(item: any): void {
    item.isFavorite = !item.isFavorite;
    this.favoriteService.toggleFavorite(item.id, item.isFavorite).subscribe(
      response => {
        console.log('Favorite status updated successfully');
      },
      error => {
        console.error('Error updating favorite status', error);
        item.isFavorite = !item.isFavorite; // Revert the change in case of error
      }
    );
  }
}
