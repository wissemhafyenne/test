import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrainService } from 'src/app/core/services/api/terrain.service';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-update-terrain',

  templateUrl: './update-terrain.component.html',
  styleUrls: ['./update-terrain.component.scss']
})
export class UpdateTerrainComponent {

  updateTerrainForm: FormGroup;
  terrainId: string | null = null;
  photosPreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  existingPhoto: string | null = null;


  constructor(
    private route: ActivatedRoute,
    private terrainService: TerrainService,
    private router: Router,
  ) {
    this.updateTerrainForm = new FormGroup({
      Name: new FormControl('', Validators.required),
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
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.terrainId = params.get('id');
      if (this.terrainId) {
        this.loadTerrainData(this.terrainId);
      } else {
        console.error('ID parameter is null or undefined');
      }
    });
  }

  loadTerrainData(id: string): void {
    this.terrainService.findTerrainById(id).subscribe(
      terrain => {
        this.updateTerrainForm.patchValue({
          Name: terrain.Name,
          description: terrain.description,
          Type: terrain.Type,
          Numero_terrain: terrain.Numero_terrain,
          longueur: terrain.longueur,
          largeur: terrain.largeur,
          surface: terrain.surface,
          Capacite: terrain.Capacite,
          nature_terrain: terrain.nature_terrain,
          hauteur_Panier: terrain.hauteur_Panier,
          surfaces_de_Jeu: terrain.surfaces_de_Jeu,
          Hauteur_du_filet: terrain.Hauteur_du_filet,
          Largeur_du_filet: terrain.Largeur_du_filet,
          Zones_de_service: terrain.Zones_de_service,
          Couloir_de_double: terrain.Couloir_de_double,
          Nombre_de_trous: terrain.Nombre_de_trous,
          Par_du_trou: terrain.Par_du_trou,
          Longueur_du_trou: terrain.Longueur_du_trou,
          Profondeur: terrain.Profondeur,
          Nombre_de_couloirs: terrain.Nombre_de_couloirs,
          Largeur_des_couloirs: terrain.Largeur_des_couloirs,
          Type_de_piscine: terrain.Type_de_piscine,
          Longueur_du_ring: terrain.Longueur_du_ring,
          Largeur_du_ring: terrain.Largeur_du_ring,
          Hauteur_du_ring: terrain.Hauteur_du_ring,
          prix_par_Heure: terrain.prix_par_Heure
        });
        this.existingPhoto = terrain.photos;
        this.photosPreview = this.existingPhoto;
      },
      error => {
        console.error('Error loading terrain:', error);
      }
    );
  }

  async onFileChange(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      try {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1280,
          useWebWorker: true
        };
        const compressedFile = await imageCompression(this.selectedFile, options);

        const reader = new FileReader();
        reader.onload = () => {
          this.photosPreview = reader.result;
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error compressing file:', error);
      }
    }
  }

  updateTerrain(): void {
    if (this.terrainId && this.updateTerrainForm.valid) {
      const updateData = {
        ...this.updateTerrainForm.value,
          photos: this.photosPreview
      };

      this.terrainService.patchTerrainById(this.terrainId, updateData).subscribe({
        next: () => this.router.navigate(['/app/terrain/user/' +this.terrainId+ '/details']),
        error: (err) => console.error('Error updating terrain:', err)
      });
    } else {
      console.error('Form is invalid or terrainId is null');
    }
  }




}
