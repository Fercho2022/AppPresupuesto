import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {path: '', redirectTo: '/ingresarpresupuesto', pathMatch: 'full'},
  {path: 'ingresarpresupuesto', component:IngresarPresupuestoComponent},
  {path: 'gastos', component:GastosComponent},
  {path: '**', redirectTo: '/ingresarpresupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
