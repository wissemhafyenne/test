import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComplexeService } from '../../../../core/services/api/complexe.servive';
import { Complexe } from '../../../../core/_modals/complexe';
import { Router } from '@angular/router';
import { TerrainService } from 'src/app/core/services/api/terrain.service';
import { Terrain } from 'src/app/core/_modals/terrain';
@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.scss'],
})

export class CompDetailsComponent  {
  complexe: Complexe | undefined;
  Terrains: Terrain[] = [];
  routerSubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private complexeService: ComplexeService,
    private terrainService: TerrainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getComplexeById(id);
      this.getTerrain(id);
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


  getTerrain(id : string): void {
    this.terrainService.getUserTerrain(id).subscribe({
  next: (data) => {this.Terrains = data,
  console.log('id',id)},
  error: (err) => console.log(err)

    }
    );

  }



}











