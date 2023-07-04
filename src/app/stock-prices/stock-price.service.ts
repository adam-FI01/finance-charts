import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/stock-environment';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  public apiUrl: string = 'https://api.polygon.io/v2'; // Replace with the appropriate base URL for polygon.io
  public apiKey = '1a6pB7ewy5qkvLVlzjApNxV39OAE5apL';

  constructor(private http: HttpClient) { }

  getStockData(symbol: string) {
    const url = `${this.apiUrl}/aggs/ticker/${symbol}/range/1/day/2021-01-01/2023-01-05?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getLatestStockPrice(symbol: string) {
    const url = `${this.apiUrl}/aggs/ticker/${symbol}/prev?unadjusted=true&apiKey=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((data: any) => data.results[0].c)
    );
  }
}
