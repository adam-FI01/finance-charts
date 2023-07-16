import { Component } from '@angular/core';
import { StockPriceService } from './stock-price.service';

@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.css']
})
export class StockPricesComponent {

  latestAAPLPrice: number | undefined;
  latestSCHDPrice: number | undefined;

  constructor(private stockPriceSerice: StockPriceService) {
    console.log(this.getStockDataAAPL)
  }

    getStockDataAAPL = this.stockPriceSerice.getStockData('AAPL')
      .subscribe((data) => {
        console.log(data); // Handle the received stock data here
      });

  getAAPL = this.stockPriceSerice.getLatestStockPrice('AAPL')
  .subscribe((price: number) => {
    this.latestAAPLPrice = price;
  });

  getSCHD = this.stockPriceSerice.getLatestStockPrice('SCHD')
  .subscribe((price: number) => {
    this.latestSCHDPrice = price;
  });
}
