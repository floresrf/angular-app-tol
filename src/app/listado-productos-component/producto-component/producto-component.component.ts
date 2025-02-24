import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-component',
  imports: [],
  templateUrl: './producto-component.component.html',
  styleUrl: './producto-component.component.css'
})
export class ProductoComponentComponent {
  producto1 = {
    descripcion: "Ordenador",
    precio: "8000"
  }

  producto2 = {
    descripcion: "Laptop",
    precio: "5500"
  }

  producto3 = {
    descripcion: "Celular",
    precio: "3200"
  }
}
