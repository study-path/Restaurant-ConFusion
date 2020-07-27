import { Injectable } from '@angular/core';

import { LeaderModel } from '../shared/models/leader-model';
import { LEADERS } from '../shared/models/leaders';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getLeaders(): LeaderModel[] {
    return LEADERS;
  }

  getLeader(id: string): LeaderModel {
    return LEADERS.filter((leader) => leader.id === id)[0];
  }

  getFeaturedLeader(): LeaderModel {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
