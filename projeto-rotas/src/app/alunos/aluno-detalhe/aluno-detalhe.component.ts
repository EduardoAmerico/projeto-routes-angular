import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit,OnDestroy {

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
