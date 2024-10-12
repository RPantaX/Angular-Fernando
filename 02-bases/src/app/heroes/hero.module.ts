import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListHeroComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

//commonModule contiene el ngIf, ngFor, etc. Nuestro codigo está encapsulado, por lo que no tiene a disposicion importar ello. Por eso importamos en 'imports'
@NgModule({
  declarations:[
    HeroComponent,
    ListHeroComponent
  ],
  exports:[HeroComponent, ListHeroComponent],
  imports:[
    CommonModule
  ]
})
export class HeroModule{}
