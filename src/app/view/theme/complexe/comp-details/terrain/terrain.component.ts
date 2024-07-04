import { Component,OnInit,OnDestroy } from '@angular/core';
import { Terrain } from 'src/app/core/_modals/terrain';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TerrainService } from 'src/app/core/services/api/terrain.service';
import { Complexe } from 'src/app/core/_modals/complexe';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit, OnDestroy {

  terrain: Terrain | undefined;
  routerSubscription: Subscription | undefined;
  complexes: Complexe[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private terrainService: TerrainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getTerrainById(id);
      
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  getTerrainById(id: string): void {
    this.terrainService.findTerrainById(id).subscribe(
      (response) => {
        if (response) {
          this.terrain = response;
          console.log('id_terrain', id)
        } else {
          console.error('No terrain found with the provided ID.');
        }
      },
      (error) => {
        console.error('Error fetching terrain:', error);
      }
    );
  }

























  
}
