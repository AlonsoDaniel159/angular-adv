import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  @Input() labels: string[] = ['1','1','1'];
  @Input() data: number[] = [1,1,1];
  @Input() title: string = 'No title';
  @Input() colors: string[] = ['#6857E6', '#009FEE', '#F02059'] ;
  @Input() type: ChartType = 'doughnut';


  public doughnutChartType!: ChartType;
  public doughnutChartData!: ChartData<'doughnut'>;
  public chartOptions!: ChartOptions; 

  ngOnInit() {
    
    this.doughnutChartType = this.type;

    // Doughnut
     this.doughnutChartData = {
     
      labels: this.labels,
      datasets: [
        { 
          data: this.data,
          //Definir colores
          backgroundColor: this.colors
        }
      ]
    };
    
    this.chartOptions = 
    {
      responsive: true,
      maintainAspectRatio: false,
    }
  }
  

}
