import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComplexeService } from '../../../../core/services/api/complexe.servive';
import { Complexe } from '../../../../core/_modals/complexe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complexe-user-detail',
  templateUrl: './complexe-user-detail.component.html',
  styleUrls: ['./complexe-user-detail.component.scss']
})
export class ComplexeUserDetailComponent {

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
}
