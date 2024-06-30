import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComplexeService } from '../../../../core/services/api/complexe.servive';
import { Complexe } from '../../../../core/_modals/complexe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-compx',
  templateUrl: './create-compx.component.html',
  styleUrls: ['./create-compx.component.scss'],
})
export class CreateCompxComponent{
  photosPreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private complexeService: ComplexeService, private router: Router) {}

  addComplexeForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Address: new FormControl('', [Validators.required]),
    Ville: new FormControl('', [Validators.required]),
    Code_postale: new FormControl('', [Validators.required]),
    Pays: new FormControl('', [Validators.required]),
    horairesOuverture: new FormGroup({
      lundi: new FormControl(''),
      mardi: new FormControl(''),
      mercredi: new FormControl(''),
      jeudi: new FormControl(''),
      vendredi: new FormControl(''),
      samedi: new FormControl(''),
      dimanche: new FormControl(''),
    }),
    photos: new FormControl(''),
  });

  get Name() {
    return this.addComplexeForm.get('Name');
  }

  get description() {
    return this.addComplexeForm.get('description');
  }

  get Address() {
    return this.addComplexeForm.get('Address');
  }

  get Ville() {
    return this.addComplexeForm.get('Ville');
  }

  get Code_postale() {
    return this.addComplexeForm.get('Code_postale');
  }

  get Pays() {
    return this.addComplexeForm.get('Pays');
  }

  get horairesOuverture() {
    return this.addComplexeForm.get('horairesOuverture') as FormGroup;
  }

  get photos() {
    return this.addComplexeForm.get('photos');
  }

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

  listComplexes() {
    if (this.addComplexeForm.valid) {
      const formData = new FormData();
      formData.append('Name', this.addComplexeForm.get('Name')?.value);
      formData.append('description', this.addComplexeForm.get('description')?.value);
      formData.append('Address', this.addComplexeForm.get('Address')?.value);
      formData.append('Ville', this.addComplexeForm.get('Ville')?.value);
      formData.append('Code_postale', this.addComplexeForm.get('Code_postale')?.value);
      formData.append('Pays', this.addComplexeForm.get('Pays')?.value);
      formData.append('horairesOuverture', JSON.stringify(this.addComplexeForm.get('horairesOuverture')?.value));
      if (this.selectedFile) {
        formData.append('photos', this.selectedFile);
      }

      this.complexeService.postComplexe(formData).subscribe({
        next: () => this.router.navigate(['/app/complexe']),
        error: (err) => console.error('Error creating complexe:', err),
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
