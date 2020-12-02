import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buscar-talento',
  templateUrl: './buscar-talento.page.html',
  styleUrls: ['./buscar-talento.page.scss'],
})
export class BuscarTalentoPage implements OnInit {


  lista: string[];

  constructor(public api: ApiService) { 

    this.inicializar();
    this.traerTalentos();
  }

  ngOnInit() {
  }

  inicializar(){
    this.lista = [
      "Bailar",
      "Cantar",
      "Programar",
      "Dibujar",
      "Escribir"
    ]
  }


  traerTalentos(){

    this.api.getTalentos().subscribe((nuevoUsuario)=>{
      console.log(nuevoUsuario);
    });
  }

  buscar(ev: any){
    this.inicializar();

    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.lista = this.lista.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}