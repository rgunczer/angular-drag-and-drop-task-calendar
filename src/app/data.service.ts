import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSchedulesFor(year: number, month: number): Observable<any[]> {

    return of([
      {
        title: 'eat',
        date: new Date(2020, 0, 15)
      },
      {
        title: 'sleep',
        date: new Date(2020, 0, 10)
      },
      {
        title: 'run',
        date: new Date(2020, 0, 15)
      },
      {
        title: 'play',
        date: new Date(2020, 0, 15)
      },
      {
        title: 'cook',
        date: new Date(2020, 0, 12)
      },
      {
        title: 'doom',
        date: new Date(2020, 1, 20)
      },
      {
        title: 'nioh 2',
        date: new Date(2020, 1, 13)
      }
    ]).pipe(
      filter(arr => {
        return arr.filter(x => x.date.getFullYear() === year && x.date.getMonth() === month);
      })
    );
  }

}
