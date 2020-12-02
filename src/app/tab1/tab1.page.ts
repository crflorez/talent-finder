import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datauser: any;
  
  constructor(   
    public api: ApiService
  ) {}

    ngOnInit(){
      
    }


    loginUsuario(){
      var correo = `laupi@gmail.com`;
      var contra : `lauris`;
      alert("Alerta de funcion registro usuario");
      this.api.loginUsuario(correo, contra).subscribe((nuevoUsuario)=>{
        console.log(nuevoUsuario);
      });
    }


}
