import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor(private dbService: DbzService){}

  get characters():Character[]{
    return [...this.dbService.characters]
  }
  onDeleteCharacter(id:string):void{
    this.dbService.onDeleteCharacter(id);
  }
  onNewCharacter(character :Character):void{
    this.dbService.onNewCharacter(character);
  }

}
