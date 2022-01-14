import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';

import Chartist from 'chartist';

import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  @ViewChild('chart') chart: ElementRef;

  type = 'Bar';

  data = {
    series: [[{ value: 10, name: 'Custom', className: 'sutil' }, 12, 8]],
  };

  options = {
    axisX: {
      showGrid: false,
    },
    height: 300,
    className: {
      series: 'sutil',
    },
  };

  ngAfterViewInit() {
    Chartist.Bar('#ch', this.data);

    // const ctx = this.chart.nativeElement.getContext('2d');
    // var myChart = new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.8)',
    //           'rgba(54, 162, 235, 0.8)',
    //           'rgba(255, 206, 86, 0.8)',
    //           'rgba(75, 192, 192, 0.8)',
    //           'rgba(153, 102, 255, 0.8)',
    //           'rgba(255, 159, 64, 0.2)',
    //         ],
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
  }
}
