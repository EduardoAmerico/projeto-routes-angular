import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  fazerLogin(usuario:Usuario){
    if(usuario.nome === 'admin' && usuario.senha === 'admin'){
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;

  }
}
