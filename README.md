# Pasos tutorial

## Generar proyecto con opcion de rutas
## Generar componentes departmentList y employeeList
## Configurar rutas
### En El archivo app-routing.modules,ts:
```
const routes: Routes = [
  // se agregan las rutas
  { path:'departments', component: DepartmentListComponent},
  { path:'employees', component: EmployeeListComponent}
];
```
 Se exportan :
```
 export const routingComponents = [DepartmentListComponent, EmployeeListComponent];
```
### En el archivo app.modules.ts
```
// se importan los routingComponents
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    //se declaran los routingComponents
    routingComponents
  ],
```
  ## en el archivo app.component.html
  ```
  <nav>
  <a routerLink="/departments" routerLinkActive="active">Departments</a>
  <a routerLink="/employees" routerLinkActive="active">Employees</a>
</nav>


<router-outlet></router-outlet>
```