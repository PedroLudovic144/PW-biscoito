import { Component } from '@angular/core';
//Pedro e Paulo Renan
@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  aberto: boolean = false;
  imagem: string = 'biscoitofechado.png';

  alternarEstado() {
    this.aberto = !this.aberto;
    this.imagem = this.aberto ? 'biscoitoaberto.png' : 'biscoitofechado.png';
    localStorage.setItem('aberto', String(this.aberto));
  }
}
