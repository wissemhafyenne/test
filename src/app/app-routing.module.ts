// Angular
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// Services
import { AuthGuard } from './core/services/global/auth-guard.service';

import { EvenementDetailsComponent } from './view/theme/event/event-details/event-details.component';
import { AddEventComponent } from './view/theme/creer-event/creer-event.component';
import { CompDetailsComponent } from './view/theme/complexe/comp-details/comp-details.component';
import { ComplexeUserDetailComponent } from './view/theme/complexe-user/complexe-user-detail/complexe-user-detail.component';
import { TerrainDetailsComponent } from './view/theme/complexe-user/complexe-user-detail/terrain-details/terrain-details.component';
import { CompUserUpdateComponent } from './view/theme/complexe-user/comp-user-update/comp-user-update.component';
import { ADDTerrainComponent } from './view/theme/complexe-user/complexe-user-detail/add-terrain/add-terrain.component';
import { UpdateTerrainComponent } from './view/theme/complexe-user/complexe-user-detail/update-terrain/update-terrain.component';
import { TerrainComponent } from './view/theme/complexe/comp-details/terrain/terrain.component';
//
// Initial routes
const routes: Routes = [
  { path: 'event/add', component: AddEventComponent },
  { path: 'event/:id/details', component: EvenementDetailsComponent },
 
 
  { path: 'complexe/:id/details',
     component: CompDetailsComponent,
   },

   {
    path: 'complexe/Terrain/:id/details',
    component: TerrainComponent,
  },


  {
    path: 'compt/user/update/:id',
    component: CompUserUpdateComponent,
  },
  
  {
    path: 'compt/user/:id/details',
    component: ComplexeUserDetailComponent,
  },

  {
    path: 'terrain/user/:id/details',
    component: TerrainDetailsComponent,
  },

  {
    path: 'terrain/user/add/:id',
    component: ADDTerrainComponent,
  },

  {
    path: 'terrain/user/update/:id',
    component: UpdateTerrainComponent,
  },


  {
    path: '',
    loadChildren: () =>
      import('./view/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./view/theme/theme.module').then((m) => m.ThemeModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'app/back',
    loadChildren: () =>
      import('./view/back-offcomplexe/back-offcomlexe.module').then((m) => m.ThemeModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

const routeOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
