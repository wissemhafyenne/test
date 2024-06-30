import { Component } from '@angular/core';
import { Complexe } from 'src/app/core/_modals/complexe';
import { ComplexeService } from 'src/app/core/services/api/complexe.servive';
@Component({
  selector: 'app-complexe-by-user-id',

  templateUrl: './complexe-by-user-id.component.html',
  styleUrls: ['./complexe-by-user-id.component.scss']
})
export class ComplexeByUserIdComponent {


  complexes: Complexe[] = [];

  userId: string = '665af7dc3fb476cd0bbe9122'; // Replace with the actual user ID

  constructor(private complexeService: ComplexeService) {



    
  }

  ngOnInit(): void {
    this.getComplexes();
  }



  getComplexes(): void {
    this.complexeService.getUserComplexe(this.userId).subscribe({
  next: (data) => this.complexes = data,
  error: (err) => console.log(err)
    }
    );


  }







  
}
