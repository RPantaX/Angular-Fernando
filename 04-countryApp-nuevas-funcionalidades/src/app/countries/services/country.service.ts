import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/Country';
import { cacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: cacheStore = {
    byCapital: {term: '', countries:[]},
    byCountries: {term: '', countries:[]},
    byRegion: {region: '', countries:[]},
  }

  constructor(private httpClient: HttpClient) { }
  //Los metodos http cuando llamamos a los get, delete, etc. ya saben cuando desuscripirse, no hace falta cerrar o destruir nada.-
  private getCountriesRequest(url:string) : Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe( //usamos pipe para enviarle un arreglo vacio y pueda renderizar nuestro html
      catchError(()=>of([])),
      delay( 2000 ) //para poder integrar una pantalla de carga, 2s
    );
  }

  sesrchCountryByAlphaCode(code:string): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${code}`)
    .pipe( //usamos pipe para enviarle un arreglo vacio y pueda renderizar nuestro html
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError(()=>of(null))
    );

  }

  searchCapital(term: string): Observable<Country[]>{
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital={term, countries})
    );
  }

  searchCountry(term: string): Observable<Country[]>{
    const url: string = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=>this.cacheStore.byCountries={term, countries})
    );


  }

  searchRegion(region: Region): Observable<Country[]>{
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=>this.cacheStore.byRegion={region, countries})
    );
  }

}
