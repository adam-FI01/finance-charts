import { Component } from '@angular/core';
import { StockPriceService } from './stock-price.service';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.css']
})
export class StockPricesComponent {

  latestPrice: number | undefined;

  constructor(private stockPriceSerice: StockPriceService) {}

  getStockData() {
    const symbol = 'AAPL'; // Example symbol, replace with your desired stock symbol
    this.stockPriceSerice.getStockData(symbol)
      .subscribe((data) => {
        console.log(data); // Handle the received stock data here
      });
  }

  getLatestStockPrice() {
    const symbol = 'AAPL'; // Example symbol, replace with your desired stock symbol
    this.stockPriceSerice.getLatestStockPrice(symbol)
      .subscribe((price: number) => {
        this.latestPrice = price;
        console.log(this.latestPrice)
      });
  }
}
