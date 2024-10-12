import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  //ES LA REFERENCIA LOCAL QUE TENEMOS EN EL HTML
  @ViewChild('txtTagInput')
  //se queja porque puede ser nulo, y con ! (not null operator) le decimos que siempre existirá ese valor
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService ){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value=''
  }

}
