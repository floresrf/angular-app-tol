import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje-component',
  imports: [],
  templateUrl: './mensaje-component.component.html',
  styleUrl: './mensaje-component.component.css'
})
export class MensajeComponentComponent {
  private message = "Este es un mensaje utilizando Typescript"

  msgObtener() {
    return this.message;
  }
}
