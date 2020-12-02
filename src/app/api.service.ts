import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from './interfaces/usuario';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

const apiUrl = "http://talentosapirest.somee.com/api/usuario/";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

   

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An Error Occurred', error.error.message);
    }else{
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}` 
      );
    }
      
    return throwError('Algo no funciona c:');
    }


    registrarUsuario(usuario: Usuario){

      const path = `${apiUrl}registrarnuevousuario`;
      return this.http.post(path, usuario)
    }

    loginUsuario(correo: string, contra:string){


      const path = `${apiUrl}inicarSesion`;
      
      return this.http.post(path, {correo, contra}, httpOptions)
      
    }

    getTalentos(){
      const path =`${apiUrl}mostrarTodosLosTalentos`;
      //return this.http.get<string[]>(path);
      return this.http.post(path, {}, httpOptions);
    }

}

