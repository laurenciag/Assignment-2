import { Component, OnInit } from '@angular/core';
import { Country } from '../../constants/country';
import { CountryServices } from '../../services/country.services';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {

  countries: Country[];
  constructor( private countryService: CountryServices ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries().subscribe ((country) => {
      console.log('country', country);
      this.countries = country;
    })
  }

}
