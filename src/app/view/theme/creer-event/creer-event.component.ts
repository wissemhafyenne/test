import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from '../../../core/services/api/evenement.service';
import { Evenement } from '../../../core/_modals/evenement';

@Component({
  selector: 'app-add-event',
  templateUrl: './creer-event.component.html',
})
export class AddEventComponent {
  event: Evenement = {
    name: '',
    organisateur: '',
    type: '',
    description: '',
    dateDebut: new Date(),
    dateFin: new Date(),
    complex: '',
  };
  selectedFile: File | null = null;

  constructor(
    private evenementService: EvenementService,
    private router: Router
  ) {}

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
    console.log(this.selectedFile?.size)
  }

  onSubmit(): void {
    const formData = new FormData();
    for (const key in this.event) {
      if (Object.prototype.hasOwnProperty.call(this.event, key)) {
        formData.append(key, (this.event as any)[key]);
      }
    }
    console.log(this.selectedFile!=null)
    console.log('1'+formData.getAll)
    console.log('2'+formData)

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    console.log('3'+formData.getAll)

    this.evenementService.addEvenement(formData).subscribe(
     
     
      (response) => {
        console.log('Event added successfully:', response);
        this.router.navigate(['/event']); // Redirect to the event page
      },
      (error) => {
        console.error('Error adding event:', error);
      }
    );
  }
}
