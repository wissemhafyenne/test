// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { PartialsModule } from '../partials/partials.module';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlayerComponent } from './player/player.component';
import { PricingComponent } from './pricing/pricing.component';
import { ArtistCarouselComponent } from './artist-carousel/artist-carousel.component';
import { SearchComponent } from './search/search.component';
import { TotalUsersComponent } from './charts/total-users/total-users.component';
import { TotalSongsComponent } from './charts/total-songs/total-songs.component';
import { PurchasesComponent } from './charts/purchases/purchases.component';


@NgModule({
  declarations: [
    // Components,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PlayerComponent,
    PricingComponent,
    ArtistCarouselComponent,
    SearchComponent,
    TotalUsersComponent,
    TotalSongsComponent,
    PurchasesComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,

    // Modules
    PartialsModule
  ],
  exports: [
    // Components,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PlayerComponent,
    PricingComponent,
    ArtistCarouselComponent,
    TotalUsersComponent,
    TotalSongsComponent,
    PurchasesComponent,


    // Modules
    PartialsModule
  ]
})
export class LayoutModule { }
