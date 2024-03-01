import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './reserva/reserva.component';
import { ExemplarComponent } from './exemplar/exemplar.component';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  { path: '', component: LivrosComponent },
  { path: ':id/reservas', component: ReservaComponent },
  { path: ':id/exemplares', component: ExemplarComponent },
  { path: ':id/exemplares/:exemplarId', component: ExemplarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
