import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

    //info: any = {};
    info: InfoPagina = {};   
    cargada = false; 
    equipo: any[] = [];   

    constructor( private http: HttpClient ) { 

      console.log("SERVICIO DE infoPagina");  
      this.cargarInfo();  
      this.cargarEquipo();  
      
  }  // constructor. 

  private cargarInfo() {
    // Leer archivo .json
      this.http.get('assets/data/data-pagina.json')
        .subscribe( ( resp: InfoPagina ) => { 
          this.cargada = true;  
          this.info = resp;  
          console.log( resp ); 
        }  )
  }  // cargarInfo.

  private cargarEquipo() {
    // Leer archivo .json dinamicamente desde Firebase de google. 
    this.http.get('https://angular-html-4a1ec-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( ( resp: any ) => { 
        this.equipo = resp;  
        console.log( resp ); 
    }  )
  } // cargarEquipo. 

}  // InfoPaginaService.  