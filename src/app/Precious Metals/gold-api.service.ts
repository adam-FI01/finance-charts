import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/gold-environment';

@Injectable({
  providedIn: 'root'
})
export class GoldApiService {
  private apiKey: string = environment.goldApiKey;
  private apiUrl: string = 'https://www.goldapi.io/api';

  constructor(private http: HttpClient) {
  }

  getGoldPrice(): Observable<any> {
    const url = `${this.apiUrl}/XAU/USD`; // Replace with the desired metal and currency pair
    const headers = new HttpHeaders().set('x-access-token', this.apiKey);

    return this.http.get(url, { headers });
  }


}
