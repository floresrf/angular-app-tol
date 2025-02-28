import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  texto: string = "";

  actualizarTexto(event: Event): void{
    const elementInput = event.target as HTMLInputElement;
    this.texto = elementInput.value;
  }
}
