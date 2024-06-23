import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EvenementService } from '../../../../core/services/api/evenement.service';
import { FavoriteService } from '../../../../view/partials/components/list-view/favorite.component';
import { Evenement } from '../../../../core/_modals/evenement';

@Component({
  selector: 'app-evenement-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EvenementDetailsComponent implements OnInit, OnDestroy {
  evenement: Evenement | undefined;
  routerSubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private evenementService: EvenementService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getEvenementById(id);
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  getEvenementById(id: string): void {
    this.evenementService.findEvennementById(id).subscribe(
      (response) => {
        if (response) {
          this.evenement = response;
        } else {
          console.error('No event found with the provided ID.');
        }
      },
      (error) => {
        console.error('Error fetching event:', error);
      }
    );
  }

  toggleFavorite(evenement: Evenement): void {
    if (evenement._id) {
      // Vérifiez que _id n'est pas undefined
      evenement.isFavorite = !evenement.isFavorite;
      this.favoriteService
        .toggleFavorite(evenement._id, evenement.isFavorite)
        .subscribe(
          (response) => {
            console.log('Favorite status updated successfully');
          },
          (error) => {
            console.error('Error updating favorite status', error);
            evenement.isFavorite = !evenement.isFavorite; // Revert the change in case of error
          }
        );
    } else {
      console.error('Event ID is undefined.');
    }
  }
}
