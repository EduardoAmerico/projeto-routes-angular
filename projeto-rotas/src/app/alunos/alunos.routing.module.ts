import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const alunosRoutes: Routes = [
  // {path: 'cursos', component: CursosComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'alunos/:id', component: AlunoDetalheComponent},
  {path: 'alunos/:id/editar', component: AlunoFormComponent},
  {path: 'alunos/novo', component: AlunoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
