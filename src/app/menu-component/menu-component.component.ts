import { Component, ViewChild } from '@angular/core';
import { MensajeComponentComponent } from './mensaje-component/mensaje-component.component';

@Component({
  selector: 'app-menu-component',
  imports: [MensajeComponentComponent],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent {
  @ViewChild(MensajeComponentComponent) mensajeComponent!: MensajeComponentComponent;

  mensaje: string = "";

  getMsg(){
    if (this.mensajeComponent) {
      this.mensaje = this.mensajeComponent.msgObtener();
    }
  }

  delMsg(){
    if (this.mensajeComponent) {
      this.mensaje = "";
    }
  }
}
