import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  cargando = true;  
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];  

  constructor( private http: HttpClient ) { 
    //console.log("Cargar Productos.0");
    this.cargarProductos(); 
  }

  private cargarProductos_OLD() {
      this.http.get('https://angular-html-4a1ec-default-rtdb.firebaseio.com/productos_idx.json')
      //.subscribe( ( resp: Producto ) =>{  // error 
        .subscribe( ( resp: any ) =>{
          //console.log(resp);
          this.productos = resp; 
          this.cargando = false;
          /*  Probar mi loading animated
          setTimeout( () => {
             this.cargando = false;
            }, 2000 );   
             */    
      }  );
    }  // cargarProductos_OLD().

  private cargarProductos() {

    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-html-4a1ec-default-rtdb.firebaseio.com/productos_idx.json')
      //.subscribe( ( resp: Producto ) =>{  // error 
        .subscribe( ( resp: any ) =>{
          //console.log(resp);
          this.productos = resp; 
          this.cargando = false;
          /*  Probar mi loading animated
          setTimeout( () => {
             this.cargando = false;
            }, 2000 );   
             */ 
          resolve;   
      }  );
      //console.log("Cargar Productos.2");
    }  );  } // cargarProductos().  

  getProducto( id: string ) {
      return this.http.get(`https://angular-html-4a1ec-default-rtdb.firebaseio.com/productos/${ id }.json`);  
  } // getProducto.

  buscarProducto( termino: string ) {
 
    if ( this.productos.length===0 ) {
      // cargar productos.
      this.cargarProductos().then( ()=>{
        // ejecutar despues de tener los productos. 
        // aplicar filtro.  
        this.filtrarProductos( termino );
      } );  
    }
    else {
      // filtrar productos. 
      this.filtrarProductos( termino );
    }
    /*
    console.log( "Buscar Producto" );    
    this.productosFiltrados = this.productos.filter( producto=>{
      return true;  
    } );
    */ 

  } // buscarProducto.

  private filtrarProductos( termino: string  ) { 
    // console.log( this.productos );
    termino = termino.toLocaleLowerCase();   
    this.productosFiltrados = [];  
    this.productos.forEach( ( prod: any ) => {
      const productoToLowerCase = prod.titulo.toLocaleLowerCase();
      
      // console.log( "productoToLowerCase="+productoToLowerCase ); 

      if ( prod.categoria.indexOf( termino )  >= 0 || productoToLowerCase.indexOf( termino ) >=0 ) {
          console.log("FILTRAR productos: "+productoToLowerCase);   
          this.productosFiltrados.push( prod );  
      }
    } );   
  } // filtrarProductos.  
 
}
