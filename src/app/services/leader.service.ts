import { Injectable } from '@angular/core';

import { LeaderModel } from '../shared/models/leader-model';
import { LEADERS } from '../shared/models/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getLeaders(): Promise<LeaderModel[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeader(id: string): Promise<LeaderModel> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(LEADERS.filter((leader) => leader.id === id)[0]),
        2000
      );
    });
  }

  getFeaturedLeader(): Promise<LeaderModel> {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(LEADERS.filter((leader) => leader.featured)[0]),
        2000
      );
    });
  }
}
