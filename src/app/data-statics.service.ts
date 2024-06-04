import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStaticsService {
  fetchCovidData() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://covid-19-tracking.p.rapidapi.com/v1aa';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '85b38bd72emsh14bc1ea68ff5f60p1131cbjsne00a274fd6a5',
    'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getCovidData(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
}
