import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  // se agregan las rutas
  { path:'departments', component: DepartmentListComponent},
  { path:'employees', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//se exporta el arreglo
export const routingComponents = [DepartmentListComponent, EmployeeListComponent];