// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { CoreModule } from './../../core/core.module';

// Components
import { LoaderComponent } from './loader/loader.component';
import { BrandComponent } from './brand/brand.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoverViewComponent } from './components/cover-view/cover-view.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ClusterViewComponent } from './components/cluster-view/cluster-view.component';
import { CommentComponent } from './comment/comment.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    LoaderComponent,
    BrandComponent,
    CarouselComponent,
    CoverViewComponent,
    DropdownComponent,
    ListViewComponent,
    ClusterViewComponent,
    CommentComponent,
    SettingsComponent
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,

    // Modules
    CoreModule
  ],
  exports: [
    // Components,
    LoaderComponent,
    BrandComponent,
    CarouselComponent,
    CoverViewComponent,
    DropdownComponent,
    ListViewComponent,
    ClusterViewComponent,
    CommentComponent,
    SettingsComponent,

    // Modules
    CoreModule
  ]
})
export class PartialsModule { }
