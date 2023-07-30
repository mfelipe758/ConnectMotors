import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './shared/guards/auth/auth-guard.service';

const routes: Routes = [
  {
    path: "carros",
    loadChildren: () => import("./body/carros.module").then((m) => m.CarrosModule)
  },
  {
    path: "carros/reserve",
    loadChildren: () => import("./body/carros.module").then((m) => m.CarrosModule),
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
