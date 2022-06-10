import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.scss'],
})
export class ReactiveContainerComponent implements OnInit {
  myInterval: Observable<number> = interval(1000).pipe(
    map((value) => value + 1),
    filter((value) => value % 2 === 0),
    take(5)
  );

  constructor() {
    /* let number = 0;

    const myObservable = new Observable<number>((observer) => {
      setInterval(() => {
        number++;
        observer.next(number);
        observer.complete();

        if (number == 3) {
          observer.error('Wrong number');
        }
      }, 3000);
    });

    myObservable.subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Observable completed');
      },
    }); */
  }

  ngOnInit(): void {
    this.myInterval.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('There are the first five numbers'),
    });
  }
}
