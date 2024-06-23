import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../../core/services/api/evenement.service';
import { Evenement } from '../../../core/_modals/evenement'; // Correct import path

@Component({
  selector: 'app-evenement',
  templateUrl: './event.component.html',
})
export class EvenementComponent implements OnInit {
  // Holds categorized event data
  upcomingEvents: Evenement[] = [];
  ongoingEvents: Evenement[] = [];
  completedEvents: Evenement[] = [];

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.getEvenements();
  }

  /**
   * Get event data from the server and categorize by status.
   */
  getEvenements(): void {
    this.evenementService.findAll().subscribe(
      (response: Evenement[]) => {
        this.categorizeEvents(response);
        console.log('Events fetched and categorized successfully.');
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  /**
   * Categorize events by status.
   * @param events - List of events
   */
  categorizeEvents(events: Evenement[]): void {
    this.upcomingEvents = events.filter((event) => event.status === 'upcoming');
    this.ongoingEvents = events.filter((event) => event.status === 'ongoing');
    this.completedEvents = events.filter(
      (event) => event.status === 'completed'
    );
  }
}
