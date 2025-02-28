import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponentComponent } from './listado-productos-component/listado-productos-component.component';
import { MensajeComponentComponent } from "./menu-component/mensaje-component/mensaje-component.component";
import { MenuComponentComponent } from "./menu-component/menu-component.component";
import { ReplicadorComponent } from './replicador/replicador.component';
import { Replicador2Component } from './replicador2/replicador2.component';

@Component({
  selector: 'app-root',
  imports: [Replicador2Component, ReplicadorComponent, MenuComponentComponent, RouterOutlet, MensajeComponentComponent, MenuComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TOL';
  subtitle = 'Tienda OnLine';

  title2 = 'MOL';
  subtitle2 = 'Mexico OnLine';

  title3 = 'ROL';
  subtitle3 = 'Replicador OnLine';
}
