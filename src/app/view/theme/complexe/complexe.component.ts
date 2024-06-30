import { Component } from '@angular/core';
import { ComplexeService } from '../../../core/services/api/complexe.servive';
import { Complexe } from '../../../core/_modals/complexe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-complexe',
  templateUrl: './complexe.component.html',
  styleUrls: ['./complexe.component.scss'],
})


export class ComplexeComponent {



  listComplexes: Complexe[] = [];

  constructor(private complexeService: ComplexeService, private router: Router) {
    this.complexeService.getAllComplexe().subscribe({
      next: (data) => this.listComplexes = data,
      error: (err) => console.log(err)
    });
  }









}
