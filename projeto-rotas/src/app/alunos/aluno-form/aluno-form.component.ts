import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno:any;
  inscricao: Subscription;
  id;


  constructor(private route:ActivatedRoute,
    private alunosService:AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        console.log(params);
        this.id = params['id'];
        console.log(params['id'])
      
        this.aluno = this.alunosService.getAluno(this.id);
      }
    );
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();

  }

}

