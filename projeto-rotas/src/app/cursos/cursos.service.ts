import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  
  getCursos(){
    return[
      {id: 1, nome:'Angular'},
      {id: 2, nome:'HTML'},
      {id: 3, nome:'CSS'},
      {id: 4, nome:'Bootstrap'},
      {id: 5, nome:'PHP'}
    ];
  }

  getCurso(id){
    let cursos = this.getCursos();
    let cursoAtual;
    cursos.forEach(curso =>{
        if(curso.id == id){
          cursoAtual = curso;
        }
    });
    if(cursoAtual){
      return cursoAtual;
    }else{
      return null;
    }
    
  }

  constructor() { }
}
