import { Component, AfterViewInit,OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GoldApiService } from '../gold-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gold-chart',
  templateUrl: './gold-chart.component.html',
  styleUrls: ['./gold-chart.component.css']
})
export class GoldChartComponent implements AfterViewInit {
  private chart: any;
  goldPrice: number | undefined;

  constructor(private goldApi: GoldApiService) {}

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart() {
    Chart.register(...registerables);

    const ctx = document.getElementById('goldChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Gold Prices',
            data: [1500, 1520, 1485, 1560, 1600],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  goldPrice$: Observable<number> | undefined;


  ngOnInit(): void {
    this.goldPrice$ = this.goldApi.getGoldPrice();
  }

}
