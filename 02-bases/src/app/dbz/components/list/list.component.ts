import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[]=[{
    name: 'Trunk',
    power: 10
  }]
  onEmitDelete(id:string){
    this.onDeleteCharacter.emit(id);
  }

}
