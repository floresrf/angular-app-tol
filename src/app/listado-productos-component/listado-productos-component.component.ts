import { Component } from '@angular/core';
import { ProductoComponentComponent } from './producto-component/producto-component.component';

@Component({
  selector: 'app-listado-productos-component',
  imports: [ProductoComponentComponent],
  templateUrl: './listado-productos-component.component.html',
  styleUrl: './listado-productos-component.component.css'
})
export class ListadoProductosComponentComponent {
  title = "Listado de Productos";
}
