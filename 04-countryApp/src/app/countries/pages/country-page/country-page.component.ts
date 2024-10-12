import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?:Country;

  constructor( private activatedRouter: ActivatedRoute,
               private router: Router,
               private countriesService: CountriesService
   ){};

  // ngOnInit(): void {
  //   this.activatedRouter.params
  //     .subscribe( (params) => {
  //       console.log({params: params['id']}) //ponemos ['id'] porque params tiene su interface en el que nos dice que devuelve un any
  //     })
  // }

  // ngOnInit(): void {
  //   this.activatedRouter.params
  //     .subscribe( ({id}) =>{
  //       this.countriesService.sesrchCountryByAlphaCode(id)
  //         .subscribe(country =>{
  //           console.log({country})
  //         });

  //     });
  // }

  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap(({id})=> this.countriesService.sesrchCountryByAlphaCode(id)),
    )
    .subscribe(country=>{
      if(!country){
        return this.router.navigateByUrl('');
      }
      return this.country = country;
    });
  }
}
