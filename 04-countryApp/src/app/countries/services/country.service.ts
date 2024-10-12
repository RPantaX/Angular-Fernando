import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }



  sesrchCountryByAlphaCode(code:string): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${code}`)
    .pipe( //usamos pipe para enviarle un arreglo vacio y pueda renderizar nuestro html
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError(()=>of(null))
    );

  }

  searchCapital(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe( //usamos pipe para enviarle un arreglo vacio y pueda renderizar nuestro html
      catchError(()=>of([]))
    );

  }

  searchCountry(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe( //usamos pipe para enviarle un arreglo vacio y pueda renderizar nuestro html
      catchError(()=>of([]))
    );

  }

  searchRegion(region: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${region}`)
    .pipe( //usamos pipe para enviarle un arreglo vacio y pueda renderizar nuestro html
      catchError(()=>of([]))
    );

  }

}
