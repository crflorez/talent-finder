import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  
  registrarUsuario(){
    const usuario = {
      tipoUsuario:1,
      nombre:'Marta',
      apellido:'Pineda',
      edad:40,
      correo:'marta@gmail.com',
      clave:'lauris',
      talento:'Matemáticas',
      descripcion:'Olimpiadas',
      sex:0,
      adjuntos:null
    };
    alert("Alerta de funcion registro usuario");
    this.api.registrarUsuario(usuario).subscribe((nuevoUsuario)=>{
      console.log(nuevoUsuario);
    });
  }
}
