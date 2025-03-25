import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
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

    aberto: boolean = false;
    imagem: string = 'biscoitofechado.png';

    fraseAleatoria(): string {
      const index = Math.floor(Math.random() * this.frases.length);
      return this.frases[index];
    }

    sortearFrase(): void {
      this.fraseExibida = this.fraseAleatoria();
      this.imagem = 'biscoitoaberto.png';
      this.exibir = false;
    }
    alternarEstado(): void {
      this.imagem = 'biscoitofechado.png';
      this.exibir = true;
    }
}
