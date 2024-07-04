import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TerrainService } from 'src/app/core/services/api/terrain.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-terrain',

  templateUrl: './add-terrain.component.html',
  styleUrls: ['./add-terrain.component.scss']
})
export class ADDTerrainComponent implements OnInit, OnDestroy {

  photosPreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  complexeId: string | undefined;
  routerSubscription: Subscription | undefined;

  constructor(
    private terrainService: TerrainService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.params.subscribe((params) => {
      this.complexeId = params['id'];
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  addTerrainForm = new FormGroup({
    Name: new FormControl(''),
    description: new FormControl(''),
    Type: new FormControl(''),
    Numero_terrain: new FormControl(''),
    longueur: new FormControl(''),
    largeur: new FormControl(''),
    surface: new FormControl(''),
    Capacite: new FormControl(''),
    nature_terrain: new FormControl(''),
    hauteur_Panier: new FormControl(''),
    surfaces_de_Jeu: new FormControl(''),
    Hauteur_du_filet: new FormControl(''),
    Largeur_du_filet: new FormControl(''),
    Zones_de_service: new FormControl(''),
    Couloir_de_double: new FormControl(''),
    Nombre_de_trous: new FormControl(''),
    Par_du_trou: new FormControl(''),
    Longueur_du_trou: new FormControl(''),
    Profondeur: new FormControl(''),
    Nombre_de_couloirs: new FormControl(''),
    Largeur_des_couloirs: new FormControl(''),
    Type_de_piscine: new FormControl(''),
    Longueur_du_ring: new FormControl(''),
    Largeur_du_ring: new FormControl(''),
    Hauteur_du_ring: new FormControl(''),
    prix_par_Heure: new FormControl(''),
    photos: new FormControl('')

  });

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.photosPreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  addTerrain() {
    if (this.addTerrainForm.valid && this.complexeId) {
      const formData = new FormData();
      Object.keys(this.addTerrainForm.controls).forEach((key) => {
        const control = this.addTerrainForm.get(key);
        if (control?.value) {
          formData.append(key, control.value);
        }
      });
      formData.append('complexeId', this.complexeId); // Adding the complexe ID
      if (this.selectedFile) {
        formData.append('photos', this.selectedFile);
      }

      console.log("formdata", formData);
      this.terrainService.postTerrain(formData).subscribe({

        next: () => this.router.navigate(['/app/compt/user/'+  this.complexeId  +'/details']),
        error: (err) => console.error('Error creating terrain:', err),
      });
    } else {
      console.error('Form is invalid');
    }
  }

  get photosPreviewUrl(): string {
    return this.photosPreview as string;
  }
}
