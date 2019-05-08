import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Subscription } from 'rxjs';

import { map, delay, filter, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mapClick() {

    from([ 1, 2, 3, 4, 5, 6, 7])
      .pipe(
        map(t => t * 2),
        map(i => i * 10),
        delay(1000)
      )
      .subscribe( v => console.log(v));


    fromEvent(document, 'click')
        .pipe(
          map((e: MouseEvent) => ({ x: e.screenX, y: e.screenY } ))
        )
        .subscribe( v => console.log(v));

  }

  filterClick() {

    from([ 1, 2, 3, 4, 5, 6, 7])
      .pipe(
        filter(f => f%2 == 1)
      )
      .subscribe( v => console.log(v));

    interval(1000)
        .pipe(
          filter( f => f%2 == 0),
          map(v => 'Value '+ v),
          delay(1000)
        )
        .subscribe(v => console.log(v));

  }

  tapClick() {

    interval(1000)
        .pipe(
          tap(i => console.log('')),
          tap(i => console.warn('Before Filtering: ', i)),
          filter( f => f%2 == 0),
          tap(i => console.warn('After Filtering: ', i)),
          map(v => 'Value '+ v),
          tap(i => console.warn('After Map: ', i)),
          //delay(1000)
        )
        .subscribe(v => console.log(v));

  }

  takeClick() {

    const obs = new Observable( o => { 

      let i;
      for( i = 0; i < 20; i++) {

        setTimeout( () => { 
          o.next( Math.floor( Math.random() * 100))}
          , i * 100);

        }
        
      setTimeout( () => o.complete(), i * 100);

    });

    const s: Subscription = obs
      .pipe(
        tap(i => console.log(i)),
        take(10)
      )
      .subscribe( v => console.log('Output', v),
                  (e) => console.error(e),
                  () => console.log('Completed'));



  }




}
