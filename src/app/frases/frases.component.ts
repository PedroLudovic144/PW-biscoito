import { Component, Input } from '@angular/core';
//Pedro e Paulo Renan
@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  @Input() exibir: boolean = true;

  frases: string[] = [
    "A persistência leva ao sucesso.",
    "Acredite nos seus sonhos.",
    "Seja a mudança que você quer ver no mundo.",
    "Nunca pare de aprender.",
    "Grandes coisas levam tempo.",
    "A jornada é mais importante que o destino.",
    "O esforço de hoje é a vitória de amanhã.",
    "Cada dia é uma nova chance.",
    "O conhecimento é poder.",
    "O impossível é só questão de opinião."
  ];

  fraseExibida =  this.frases[this.frases.length - 1];

  fraseAleatoria(): string {
    const index = Math.floor(Math.random() * this.frases.length);
    return this.frases[index];
  }

  sortearFrase(): void {
    this.fraseExibida = this.fraseAleatoria();
  }
}


