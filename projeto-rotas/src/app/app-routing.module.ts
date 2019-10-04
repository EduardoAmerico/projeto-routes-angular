import { AursosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';

const routes: Routes = [
  {path: 'cursos', 
    loadChildren: './cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
  {path: 'alunos', 
    loadChildren: './alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard],
    canActivateChild: [AursosGuard]
  },

  {path: '', component: HomeComponent,
  canActivate: [AuthGuard]
  
  },
  {path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 