import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LeaderModel } from '../shared/models/leader-model';
import { LEADERS } from '../shared/models/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getLeaders(): Observable<LeaderModel[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<LeaderModel> {
    return of(LEADERS.filter((leader) => leader.id === id)[0]).pipe(
      delay(2000)
    );
  }

  getFeaturedLeader(): Observable<LeaderModel> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }
}
