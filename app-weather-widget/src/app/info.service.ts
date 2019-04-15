import { Injectable } from '@angular/core';
import { Iinfo, Iweather, IsocialInfo, info$ } from './mock/info';
import { Observable, from, AsyncSubject, Subject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private selectedInfo: Subject<Iinfo> = new Subject();

  constructor() { }

  public getAllInfo(): Observable<Iinfo[]> {
    return info$;
  }

  public getInfo(): Observable<Iinfo> {
    return this.selectedInfo;
  }

  public setInfo(info: Iinfo): void {
    this.selectedInfo.next(info);
  }
}

// !kill me pls
// this.selectedInfo = info$.pipe(
//   switchMap((val: Iinfo[]): Observable<Iinfo> => {
//     return from(val).pipe(
//       filter((e: Iinfo) => {
//         return e.type === type;
//       })
//     );
//   })
// );
