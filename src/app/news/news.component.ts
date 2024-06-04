import { Component, OnInit } from '@angular/core';
import { CovidsService } from '../covids.service';

@Component({
  selector: 'app-covid-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  covidNews: any[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private covidService: CovidsService,
  ) {}

  ngOnInit(): void {
    this.fetchCovidNews();
  }

  fetchCovidNews() {
    this.loading = true;

    this.covidService.getCovidNews().subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.articles && data.articles.length > 0) {
          this.covidNews = data.articles;
        } else {
          this.error = 'No articles found';
        }
      },
      (error: any) => {
        console.error('API call failed:', error); 
      }
    );
  }

}
