import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor( public _infoService: InfoPaginaService,
               public _productosService: ProductosService ) { }

  ngOnInit(): void {
  }

}
