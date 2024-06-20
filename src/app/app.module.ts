// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { PartialsModule } from './view/partials/partials.module';

// Default component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Default component
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Modules
    PartialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
