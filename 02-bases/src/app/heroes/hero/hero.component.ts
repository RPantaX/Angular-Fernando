import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string ='ironman';
  public edad: number = 45

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string{
    return `${this.name} - ${this.edad}`;
  }
  cambiarNombre(): void{
    this.name='spiderman'
  }
  cambiarEdad(): void{
    this.edad=25
  }

  resetForm() : void{
    this.name = "ironman"
    this.edad = 45


    //estas instrucciones están fuera del ciclo de detección de cambio de esto, por ello no se envia codigo html desde los componentes.
    //document.querySelectorAll('h1')!.forEach(element => {
    //  element.innerHTML = '<h1>Desde Angular</h1>'
   // })
  }
}
