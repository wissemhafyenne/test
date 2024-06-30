import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { LayoutModule } from '../layout/layout.module';

// Components
import { BackOffcomplexeComponent } from './back-offcomplexe.component';
import { HomeComponent } from './home2/home2.component';
import { ComplexeByUserIdComponent } from './complexe-by-user-id/complexe-by-user-id.component';
const routes: Routes = [
  {
    path: '',
    component: BackOffcomplexeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home2',
        pathMatch: 'full',
      },
      {
        path: 'home2',
        component: HomeComponent,
      },

      {
        path: '/comp/user',
        component: ComplexeByUserIdComponent,
      },
  

    ],
  },
  {
    path: '**',
    redirectTo: 'home2',
  },
];

@NgModule({
  declarations: [
   
    HomeComponent,
    ComplexeByUserIdComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ThemeModule {}
