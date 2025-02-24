import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponentComponent } from './listado-productos-component/listado-productos-component.component';

@Component({
  selector: 'app-root',
  imports: [ListadoProductosComponentComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TOL';
  subtitle = 'Tienda OnLine'
}
