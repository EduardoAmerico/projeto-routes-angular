import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlunoFormComponent, 
    AlunoDetalheComponent, 
    AlunosComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule

  ],

  providers: [
    AlunosService
  ]
})
export class AlunosModule { }
