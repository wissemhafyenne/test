import { Component,OnInit } from '@angular/core';
import { Complexe } from 'src/app/core/_modals/complexe';
import { ComplexeService } from 'src/app/core/services/api/complexe.servive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complexe-user',
  templateUrl: './complexe-user.component.html',
  styleUrls: ['./complexe-user.component.scss']

})
export class ComplexeUserComponent implements OnInit {


  complexes: Complexe[] = [];

  userId: string = '665af7dc3fb476cd0bbe9122'; // Replace with the actual user ID

  constructor(private complexeService: ComplexeService, private router : Router) {


    
  }

  ngOnInit(): void {
    this.getComplexes();
    this.addcomplexe
    

  }



  getComplexes(): void {
    this.complexeService.getUserComplexe(this.userId).subscribe({
  next: (data) =>  {
    this.complexes = data
    console.log('user_id', this.userId)
    console.log('data', data)

  },

  error: (err) => console.log(err)
    }
    );
  }


  addcomplexe(): void {

this.router.navigate(['/app/compt/user/add'])

  }











  /*

  complexes: Complexe[] = [];
  userId: string | null = null;

  constructor(private complexeService: ComplexeService, private authService: AuthService) {}




  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.userId) {
      this.getComplexes();
    } else {
      console.error('User ID not found!');
    }
  }

  getComplexes(): void {
    if (this.userId) {
      this.complexeService.getUserComplexe(this.userId).subscribe(
        (data: Complexe[]) => {
          this.complexes = data;
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    }
  }
*/
}
























