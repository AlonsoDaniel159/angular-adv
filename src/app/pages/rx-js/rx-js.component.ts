import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styles: [
  ]
})
export class RxJSComponent implements OnDestroy{

  public intervalSubs!: Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   //Intenta de nuevo hasta conseguir el complete
    //   retry(1)
    // ).subscribe({
    //   next: valor => console.log('Subs: ', valor),

    //   error: error => console.info(error),

    //   complete: () => console.info('Obs terminado')
    // })

    this.intervalSubs = this.retornaIntervalo().subscribe({
      next: (valor) => console.log(valor)
    })
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(100)
            .pipe(
              // take(10),
              map(valor => valor + 1),
              filter(valor => valor % 2 == 0),
            );

  }

  retornaObservable(): Observable<number> {

    let i = -1;

    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          observer.error('i llegó al valor de 2')
        }

      }, 1000);

    });

    return obs$;
  }
}
