import { Component, OnInit} from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] =[];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService:CountriesService){};

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void{

    this.isLoading = true

    this.countriesService.searchCapital(term)
      .subscribe(countries=>{
        this.countries = countries;
        this.isLoading = false //asignamos true cuando ya tengamos un valor para countries, ya sea vacio o con datos.
      })

  }
}
