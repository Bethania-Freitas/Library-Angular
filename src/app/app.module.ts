import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ReservaComponent } from './reserva/reserva.component';
import { ExemplarComponent } from './exemplar/exemplar.component';
import { LivrosComponent } from './livros/livros.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    ExemplarComponent,
    LivrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
