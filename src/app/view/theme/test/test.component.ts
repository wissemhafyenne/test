import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Terrain } from 'src/app/core/_modals/terrain';
import { TerrainService } from 'src/app/core/services/api/terrain.service';


@Component({
  selector: 'app-test',

  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  terrains: Terrain[] = [];
  complexeId: string = '667e8e3e4ed7272a275cbfa5';

  constructor(private terrainService: TerrainService) {


    
  }










  ngOnInit(): void {

      this.getTerrain();
  
  }




  getTerrain(): void {
    this.terrainService.getUserTerrain(this.complexeId).subscribe({
  next: (data) => this.terrains = data,
  error: (err) => console.log(err)

    }
    );
}
}