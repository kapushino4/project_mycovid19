import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidsService {
  refresh() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getCovidNews() {
    const options = {
      headers: {
        'X-RapidAPI-Key': 'a383f4773bmshf2f860e108202c0p1cb80ajsn76c2798ff9d7',
        'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
      }
    };

    return this.http.get('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True', options);
  }
}
