import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  private options$: Observable<string[]>;

  constructor() { }

  ngOnInit() {

    this.options$ = Observable.create(
      (observer) => {
        for(let i = 1; i <= 10; i++) {

          observer.next(`This is my ${i}th option`)

        }
        observer.complete()
      }
    )
    .pipe(
      map(i => i + "!"),
      toArray(),
      delay(1000)
    );

    this.options$.subscribe(v => console.log(v));

  }

}
