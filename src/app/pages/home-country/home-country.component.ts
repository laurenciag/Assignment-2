import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/constants/country';
import { CountryServices } from 'src/app/services/country.services';

@Component({
  selector: 'app-home-country',
  templateUrl: './home-country.component.html',
  styleUrls: ['./home-country.component.css']
})
export class HomeCountryComponent implements OnInit {

  countries : Array<Country>
  topPopulated: Array<Country>
  topLargest : Array<Country>


  constructor(private countryService: CountryServices) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.countryService.getCountries().subscribe((d) =>{
      this.countries=d;
      this.topPopulated= this.countries.sort(function(a, b) {
        var keyA = (a.population),
          keyB = (b.population);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });

      
      this.topPopulated= this.topPopulated.slice(0,3);

      this.topLargest = this.countries.sort(function(a, b) {
        var keyA = (a.area),
          keyB = (b.area);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });

      this.topLargest = this.topLargest.slice(0,3);
      
      

    })
  }
}