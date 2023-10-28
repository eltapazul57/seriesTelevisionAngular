import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from "./serie.service";






@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = []
  promedio: number = 0;
  constructor(private serieService: SerieService) { }

  getSeriesLis2(): Array<Serie> {
    return dataSeries;
  }

  getSeriesList() {
    this.serieService.getSeries().subscribe((cs) => {
      this.series = cs;
    });
  }

  
  

  ngOnInit() {
    this.getSeriesList();
  }
  getSeasonAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    let numSeries: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    series.forEach((serie) => numSeries = numSeries + 1);
    const promedio: number = totalSeasons / numSeries;
    console.log(promedio);
    return promedio;
  }
}





