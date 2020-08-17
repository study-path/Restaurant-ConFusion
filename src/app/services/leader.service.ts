import { Injectable } from '@angular/core';

import { LeaderModel } from '../shared/models/leader-model';
import { LEADERS } from '../shared/models/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getLeaders(): Promise<LeaderModel[]> {
    return Promise.resolve(LEADERS);
  }

  getLeader(id: string): Promise<LeaderModel> {
    return Promise.resolve(LEADERS.filter((leader) => leader.id === id)[0]);
  }

  getFeaturedLeader(): Promise<LeaderModel> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
}
