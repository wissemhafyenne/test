import { Component } from '@angular/core';
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
export class ADDTerrainComponent  {

  photosPreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  complexeId: string | undefined;
  routerSubscription: Subscription | undefined;
  constructor(private terrainService: TerrainService, private router: Router,private activatedRoute: ActivatedRoute,) { }

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
    longueur: new FormControl(''),
    largeur: new FormControl(''),
    surface: new FormControl(''),
    Numero_terrain: new FormControl(''),
    Capacite: new FormControl(''),
    prixparHeure: new FormControl(''),
    disponibilite: new FormControl(''),
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
    photos: new FormControl(''),
    /*
    Equipement: new FormControl(''),
    */
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
    if (this.addTerrainForm.valid && this.complexeId)  {
      const formData = new FormData();
      formData.append('Name', this.addTerrainForm.get('Name')?.value);
      formData.append('description', this.addTerrainForm.get('description')?.value);
      formData.append('Type', this.addTerrainForm.get('Type')?.value);
      formData.append('longueur', this.addTerrainForm.get('longueur')?.value);
      formData.append('largeur', this.addTerrainForm.get('largeur')?.value);
      formData.append('surface', this.addTerrainForm.get('surface')?.value);
      formData.append('Numero_terrain', this.addTerrainForm.get('Numero_terrain')?.value);
      formData.append('Capacite', this.addTerrainForm.get('Capacite')?.value);
      formData.append('prixparHeure', this.addTerrainForm.get('prixparHeure')?.value);
      formData.append('disponibilite', this.addTerrainForm.get('disponibilite')?.value);
      formData.append('nature_terrain', this.addTerrainForm.get('nature_terrain')?.value);
      formData.append('hauteur_Panier', this.addTerrainForm.get('hauteur_Panier')?.value);
      formData.append('surfaces_de_Jeu', this.addTerrainForm.get('surfaces_de_Jeu')?.value);
      formData.append('Hauteur_du_filet', this.addTerrainForm.get('Hauteur_du_filet')?.value);
      formData.append('Largeur_du_filet', this.addTerrainForm.get('Largeur_du_filet')?.value);
      formData.append('Zones_de_service', this.addTerrainForm.get('Zones_de_service')?.value);
      formData.append('Couloir_de_double', this.addTerrainForm.get('Couloir_de_double')?.value);
      formData.append('Nombre_de_trous', this.addTerrainForm.get('Nombre_de_trous')?.value);
      formData.append('Par_du_trou', this.addTerrainForm.get('Par_du_trou')?.value);
      formData.append('Longueur_du_trou', this.addTerrainForm.get('Longueur_du_trou')?.value);
      formData.append('Profondeur', this.addTerrainForm.get('Profondeur')?.value);
      formData.append('Nombre_de_couloirs', this.addTerrainForm.get('Nombre_de_couloirs')?.value);
      formData.append('Largeur_des_couloirs', this.addTerrainForm.get('Largeur_des_couloirs')?.value);
      formData.append('Type_de_piscine', this.addTerrainForm.get('Type_de_piscine')?.value);
      formData.append('Longueur_du_ring', this.addTerrainForm.get('Longueur_du_ring')?.value);
      formData.append('Largeur_du_ring', this.addTerrainForm.get('Largeur_du_ring')?.value);
      formData.append('Hauteur_du_ring', this.addTerrainForm.get('Hauteur_du_ring')?.value);
      formData.append('complexeId', this.complexeId); // Adding the complexe ID
      /*
      formData.append('Equipement', JSON.stringify(this.addTerrainForm.get('Equipement')?.value));
      */
      if (this.selectedFile) {
        formData.append('photos', this.selectedFile);
      }

      console.log("formdata", formData);
      this.terrainService.postTerrain(formData).subscribe({
        next: () => this.router.navigate(['/app/compt/user']),
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
