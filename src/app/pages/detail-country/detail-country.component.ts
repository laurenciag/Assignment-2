import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/constants/country';
import { CountryServices } from 'src/app/services/country.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  country : Country;
  constructor(
    private countryService: CountryServices
  ) { }

  ngOnInit(): void {
    this.country = window.history.state.counter
    console.log(this.country)
  }

}
