import { Component, OnInit } from '@angular/core';
import { CountryCovidData } from '../covid-statics.model';
import { DataStaticsService } from '../data-statics.service'; 
import { UseMocksService } from '../use-mocks.service';

@Component({
  selector: 'app-covid-statics',
  templateUrl: './covid-statics.component.html',
  styleUrls: ['./covid-statics.component.css']
})
export class CovidStaticsComponent implements OnInit {
  covidData: CountryCovidData[] = [];
  loading: boolean = true;

  constructor(
    private datasService: DataStaticsService,
    private useMocksService: UseMocksService
  ) {} 

  ngOnInit(): void {
    this.datasService.getCovidData().subscribe(
      (data: CountryCovidData[]) => {
        this.covidData = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        if (error) {
          this.fetchMockData();
        }
      }
    );
  }

  private fetchMockData(): void {
    this.useMocksService.getMockData().subscribe(
      (mockData: any[]) => {
        this.covidData = mockData;
        this.loading = false;
      },
      (mockError: any) => {
        console.error('Error fetching mock data:', mockError);
        this.loading = false; 
      }
    );
  }
}
