import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { LayoutModule } from '../layout/layout.module';

// Components
import { ThemeComponent } from './theme.component';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { GenreDetailsComponent } from './genre/genre-details/genre-details.component';
import { SongComponent } from './song/song.component';
import { SongDetailsComponent } from './song/song-details/song-details.component';
import { AlbumComponent } from './subscription/subscription.component';
import { AlbumDetailsComponent } from './subscription/subscription-details/subscription-details.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';
import { StationComponent } from './station/station.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { HistoryComponent } from './user/history/history.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { PlanComponent } from './user/plan/plan.component';
import { PanierComponent } from './user/Panier/panier/panier.component';
import { EvenementComponent } from './event/event.component';
import { EvenementDetailsComponent } from './event/event-details/event-details.component';
import { AddEventComponent } from './creer-event/creer-event.component';
import { ComplexeComponent } from './complexe/complexe.component';
import { CompDetailsComponent } from './complexe/comp-details/comp-details.component';
import { TerrainComponent } from './complexe/comp-details/terrain/terrain.component';
import { ComplexeUserComponent } from './complexe-user/complexe-user.component';
import { ComplexeUserDetailComponent } from './complexe-user/complexe-user-detail/complexe-user-detail.component';
import { CompUserAddComponent } from './complexe-user/comp-user-add/comp-user-add.component';
import { CompUserUpdateComponent } from './complexe-user/comp-user-update/comp-user-update.component';
import { TerrainDetailsComponent } from './complexe-user/complexe-user-detail/terrain-details/terrain-details.component';
import { ADDTerrainComponent } from './complexe-user/complexe-user-detail/add-terrain/add-terrain.component';
import { UpdateTerrainComponent } from './complexe-user/complexe-user-detail/update-terrain/update-terrain.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'genre',
        component: GenreComponent,
      },
      {
        path: 'genre/:id/details',
        component: GenreDetailsComponent,
      },
      {
        path: 'song',
        component: SongComponent,
      },
      {
        path: 'song/:id/details',
        component: SongDetailsComponent,
      },
      {
        path: 'album',
        component: AlbumComponent,
      },
      {
        path: 'album/:id/details',
        component: AlbumDetailsComponent,
      },
      {
        path: 'artist',
        component: ArtistComponent,
      },
      {
        path: 'artist/:id/details',
        component: ArtistDetailsComponent,
      },
      {
        path: 'stations',
        component: StationComponent,
      },
      {
        path: 'favorites',
        component: FavoriteComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'plan',
        component: PlanComponent,
      },
      {
        path: 'panier',
        component: PanierComponent,
      },
      {
        path: 'event',
        component: EvenementComponent,
      },
      {
        path: 'event/:id/details',
        component: EvenementDetailsComponent,
      },
      {
        path: 'event/add',
        component: AddEventComponent,
      },
      {
        path: 'complexe',
        component: ComplexeComponent,
      },

      { path: 'complexe/:id/details',
        component: CompDetailsComponent
      },

      {
        path: 'complexe/Terrain/:id/details',
        component: TerrainComponent,
      },

      {
        path: 'compt/user',
        component: ComplexeUserComponent,
      },

      {
        path: 'compt/user/:id/details',
        component: ComplexeUserDetailComponent,
      },

      {
        path: 'compt/user/add',
        component: CompUserAddComponent,
      },

      {
        path: 'compt/user/update/:id',
        component: CompUserUpdateComponent,
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
        path: 'test',
        component: TestComponent,
      },

  

    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [
    ThemeComponent,
    HomeComponent,
    GenreComponent,
    GenreDetailsComponent,
    SongComponent,
    SongDetailsComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    ArtistComponent,
    ArtistDetailsComponent,
    FavoriteComponent,
    HistoryComponent,
    ProfileComponent,
    SettingsComponent,
    PlanComponent,
    EvenementComponent,
    EvenementDetailsComponent,
    StationComponent,
    PanierComponent,
    AddEventComponent,
    ComplexeComponent,
    CompDetailsComponent,
    TerrainComponent,
    ComplexeUserComponent,
    ComplexeUserDetailComponent,
    CompUserAddComponent,
    CompUserUpdateComponent,
    TerrainDetailsComponent,
    ADDTerrainComponent,
    UpdateTerrainComponent,






    TestComponent



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
