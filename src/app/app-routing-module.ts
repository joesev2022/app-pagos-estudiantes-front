import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Estudiantes } from './estudiantes/estudiantes';
import { Pagos } from './pagos/pagos';
import { LoadEstudiantes } from './load-estudiantes/load-estudiantes';
import { LoadPagos } from './load-pagos/load-pagos';

const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'estudiantes', component: Estudiantes },
  { path: 'pagos', component: Pagos },
  { path: 'load-estudiantes', component: LoadEstudiantes },
  { path: 'load-pagos', component: LoadPagos },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
