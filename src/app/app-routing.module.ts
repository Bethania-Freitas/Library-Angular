import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './reserva/reserva.component';
import { ExemplarComponent } from './exemplar/exemplar.component';

const routes: Routes = [
  { path: ':id/reservas', component: ReservaComponent },
  { path: ':id/exemplares', component: ExemplarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
