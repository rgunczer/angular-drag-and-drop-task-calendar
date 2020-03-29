import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _date: Date;
  weeks: any[] = [];
  weeksCount: number;
  daysCount: number;
  weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  @Input()
  set date(date: Date) {
    this._date = date;
    // The getDay() method returns the day of the week (from 0 to 6) for the specified date. Sunday is 0, Monday is 1, and so on.
    const year = this._date.getFullYear();
    const month = this._date.getMonth();
    const day = 1;

    const firstDayOfTheMonth = new Date(year, month, day).getDay();
    console.log(`firstDayOfTheMonth: [${day}-${month}-${year}]`, firstDayOfTheMonth);
    console.log(this.weekDayNames[firstDayOfTheMonth]);

    const info = this.getWeeksAndDaysCount(this._date);
    this.weeksCount = info.weeksCount;
    this.daysCount = info.daysCount;
    console.log('weekCount: ', this.weeksCount);
    for (let i = 0; i < this.weeksCount; ++i) {
      // this.weeks.push([0, 1, 2, 3, 4, 5, 6]);
      this.weeks.push([{}, {}, {}, {}, {}, {}, {}]);
    }

    this.fillDays(firstDayOfTheMonth);
  }

  constructor() { }

  ngOnInit() {
  }

  private fillDays(firstDayOfTheMonth: number) {
    console.log(`fillDays -> firstDayOfTheMonth[${firstDayOfTheMonth}]`);
    const year = this._date.getFullYear();
    const month = this._date.getMonth();
    let day = 1;

    for (let w = 0; w < this.weeksCount; ++w) {
      let d = (w === 0) ? firstDayOfTheMonth : 0;
      for (; d < this.weekDayNames.length; ++d) {
        // this.weeks[w][d] = `${new Date(year, month, day).getDay()} - ${day}`;
        this.weeks[w][d] = { fullDate: new Date(year, month, day), day, tasks: this.generateRandomTasks() };
        ++day;
        if (new Date(year, month, day).getMonth() !== month) {
          return;
        }
      }
    }
  }

  private getWeeksAndDaysCount(date): { daysCount: number, weeksCount: number } {
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const daysCount = first.getDay() + last.getDate();
    const weeksCount = Math.ceil(daysCount / 7);

    return {
      daysCount,
      weeksCount
    };
  }

  private generateRandomTasks() {

    function getRandomBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    const hardcodedTasks = ['eat', 'sleep', 'run', 'cook'];

    const tasks = [];

    if (Math.random() > 0.75) {
      const taskCnt = getRandomBetween(0, hardcodedTasks.length);
      for (let i = 0; i < taskCnt; ++i) {
        tasks.push(hardcodedTasks[i]);
      }


    }

    return tasks;
  }

}
