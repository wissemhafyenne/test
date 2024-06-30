import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComplexeService } from '../../../../core/services/api/complexe.servive';
import { Complexe } from '../../../../core/_modals/complexe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.scss'],
})

export class CompDetailsComponent  {
  complexe: Complexe | undefined;
  routerSubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private complexeService: ComplexeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getComplexeById(id);
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  getComplexeById(id: string): void {
    this.complexeService.findComplexeById(id).subscribe(
      (response) => {
        if (response) {
          this.complexe = response;
        } else {
          console.error('No complexe found with the provided ID.');
        }
      },
      (error) => {
        console.error('Error fetching complexe:', error);
      }
    );
  }


  deleteComplexe(id: string): void {
    this.complexeService.deleteComplexeById(id).subscribe(
      (response) => {
        if (response && response.message) {
          console.log('Complexe deleted:', response.message);
          // Redirigez vers une autre route après la suppression réussie
            this.router.navigate(['/app/complexe']);
        } else {
          console.error('No complexe found with the provided ID.');
        }
      },
      (error) => {
        console.error('Error deleting complexe:', error);
      }
    );
  }
}











