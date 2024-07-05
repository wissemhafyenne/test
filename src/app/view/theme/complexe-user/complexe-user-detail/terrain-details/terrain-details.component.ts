import { Component,OnInit,OnDestroy } from '@angular/core';
import { Terrain } from 'src/app/core/_modals/terrain';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TerrainService } from 'src/app/core/services/api/terrain.service';
import { Complexe } from 'src/app/core/_modals/complexe';
@Component({
  selector: 'app-terrain-details',

  templateUrl: './terrain-details.component.html',
  styleUrls: ['./terrain-details.component.scss']
})
export class TerrainDetailsComponent implements OnInit, OnDestroy {
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

  deleteTerrain(id: string): void {
    this.terrainService.deleteTerrainById(id).subscribe(
      (response) => {
        if (response && response.message) {
          console.log('Terrain deleted:', response.message);

          // Redirigez vers une autre route après la suppression réussie
          if (this.terrain?.complexeId) {
            this.router.navigate(['/app/compt/user/' + this.terrain.complexeId + '/details']);
          }

        } else {
          console.error('No Terrain found with the provided ID.');
        }
      },
      (error) => {
        console.error('Error deleting Terrain:', error);
      }
    );
  }


  updateTerrain(): void {
    if (this.terrain?._id) {
      this.router.navigate(['/app/terrain/user/update/', this.terrain._id]);
    } else {
      console.error('Complex ID is not defined.');
      // Handle the case where complex ID is not available
    }
  }


  addEquipemment(): void {

    this.router.navigate(['/app/travail dhia'])
    
      }



}
