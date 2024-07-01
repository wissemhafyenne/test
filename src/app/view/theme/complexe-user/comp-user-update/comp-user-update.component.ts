import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplexeService } from 'src/app/core/services/api/complexe.servive';
import { Complexe } from 'src/app/core/_modals/complexe';
@Component({
  selector: 'app-comp-user-update',

  templateUrl: './comp-user-update.component.html',
  styleUrls: ['./comp-user-update.component.scss']
})
export class CompUserUpdateComponent  {
  updateComplexeForm: FormGroup;
  complexeId: string | null = null;
  photosPreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  existingPhoto: string | null = null;
  UserId: string = '665af7dc3fb476cd0bbe9122';

  constructor(
    private route: ActivatedRoute,
    private complexeService: ComplexeService,
    private router: Router
  )  {
    this.updateComplexeForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      description: new FormControl(''),
      Address: new FormControl(''),
      Ville: new FormControl(''),
      Code_postale: new FormControl(''),
      Pays: new FormControl(''),
      horairesOuverture: new FormGroup({
        lundi: new FormControl(''),
        mardi: new FormControl(''),
        mercredi: new FormControl(''),
        jeudi: new FormControl(''),
        vendredi: new FormControl(''),
        samedi: new FormControl(''),
        dimanche: new FormControl(''),
      }),
      photos: new FormControl('') // Include the photos control
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.complexeId = params.get('id');
      if (this.complexeId) {
        this.loadComplexeData(this.complexeId);
      } else {
        console.error('ID parameter is null or undefined');
      }
    });
  }

  loadComplexeData(id: string): void {
    this.complexeService.findComplexeById(id).subscribe(
      complexe => {
        this.updateComplexeForm.patchValue({
          Name: complexe.Name,
          description: complexe.description,
          Address: complexe.Address,
          Ville: complexe.Ville,
          Code_postale: complexe.Code_postale,
          Pays: complexe.Pays,
          horairesOuverture: complexe.horairesOuverture
        });
        this.existingPhoto = complexe.photos; // Assuming `photos` contains the URL or path of the existing photo
        this.photosPreview = this.existingPhoto;

      },
      error => {
        console.error('Error loading complexe:', error);
      }
    );
  }

  onFileChange(event: Event): void {
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

  updateComplexe(): void {
    if (this.complexeId && this.updateComplexeForm.valid) {
      const updateData = {
        ...this.updateComplexeForm.value,
        UserId: this.UserId,
        photos: this.photosPreview // Make sure to include photo data
      };

      this.complexeService.patchComplexeById(this.complexeId, updateData).subscribe({
        next: () => this.router.navigate(['/app/compt/user']),
        error: (err) => console.error('Error updating complexe:', err)
      });
    } else {
      console.error('Form is invalid or complexeId is null');
    }
  }
}
