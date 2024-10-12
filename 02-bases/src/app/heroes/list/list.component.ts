import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListHeroComponent {
  public heroNames:String[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public deleteLeast?: String;
  public heroeBorrado(): void{
    this.deleteLeast= this.heroNames.pop();
  }
}
