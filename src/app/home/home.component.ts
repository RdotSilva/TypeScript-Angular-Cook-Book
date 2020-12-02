import { Component, OnInit } from '@angular/core';
import { interval, Subscription, observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private firstObsSubscription: Subscription;
  myCount: number;

  constructor() {}

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);
        if (count == 5) {
          observer.complete();
        }
        // Throw custom error
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }

        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        map((data: number) => {
          return 'My Count: ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          this.myCount = data;
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
