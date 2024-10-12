import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription; //?: porque en el momento en que cremao la propiedad no lo tenemos

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce= new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSuscription=this.debouncer
    .pipe(debounceTime(1000)) //debounce time consiste en el tiempo de espera que realiza el pipe, antes de que termine toda la funcion, es decir espera mas valores antes de ejecutar la petición
    .subscribe(value =>{
        this.onDebounce.emit(value);
    })
  }
  emitValue( value: string ): void {
    this.onValue.emit(value)
  }
  onKeyPress(searchTerm: string ){
    this.debouncer.next(searchTerm); //el subscribe pide string, luego sigue lo del debouncer que pide un valor.
  }
  ngOnDestroy(): void { //sino el subsribe va a estar escuchando todo el rato.
    this.debouncerSuscription?.unsubscribe();
  }
}
