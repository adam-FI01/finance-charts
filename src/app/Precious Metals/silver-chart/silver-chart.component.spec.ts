import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverChartComponent } from './silver-chart.component';

describe('SilverChartComponent', () => {
  let component: SilverChartComponent;
  let fixture: ComponentFixture<SilverChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilverChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
