import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComplexeService } from '../../../../core/services/api/complexe.servive';
import { TerrainService } from 'src/app/core/services/api/terrain.service';
import { Complexe } from '../../../../core/_modals/complexe';
import { Router } from '@angular/router';
import { Terrain } from 'src/app/core/_modals/terrain';

@Component({
  selector: 'app-complexe-user-detail',
  templateUrl: './complexe-user-detail.component.html',
  styleUrls: ['./complexe-user-detail.component.scss']
})
export class ComplexeUserDetailComponent {
  terrains: Terrain[] = [];
 /* complexeId: string = '667e8e3e4ed7272a275cbfa5';*/
  complexe: Complexe | undefined;
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
          console.log ('id_complexe', id)
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
  next: (data) => this.terrains = data,
  error: (err) => console.log(err)

    }
    );

  }

  updateComplexe(): void {
    if (this.complexe?._id) {
      this.router.navigate(['/app/compt/user/update', this.complexe._id]);
    } else {
      console.error('Complex ID is not defined.');
      // Handle the case where complex ID is not available
    }
  }


  
    addTerrain(): void {
      if (this.complexe?._id) {
        this.router.navigate(['/app/terrain/user/add', this.complexe._id]);
      } else {
        console.error('Complex ID is not defined.');
        // Handle the case where complex ID is not available
      }
    }




  
    }












  


