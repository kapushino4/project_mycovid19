import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UseMocksService {

  constructor(private http: HttpClient) { }

  getMockData(): Observable<any[]> {
    return this.http.get<any[]>('/assets/mock-data.json');
  }
}
