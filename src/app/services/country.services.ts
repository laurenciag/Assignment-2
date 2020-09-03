import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../constants/country';

@Injectable({
    providedIn: 'root'
})

export class CountryServices {
    private BASE_URL = 'https://5d60ae24c2ca490014b27087.mockapi.io/api/v1';
    constructor(
        private http: HttpClient) { }

    getCountries() {
        return this.http.get<Country[]>(`${this.BASE_URL}/country`);
    }

    getCountry(id) {
        return this.http.get<Country>(`${this.BASE_URL}/country/${id}`);
    }
}