import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseURL';
import { LeaderModel } from '../shared/models/leader-model';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor(
    private httpClient: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getLeaders(): Observable<LeaderModel[]> {
    return this.httpClient
      .get<LeaderModel[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }

  getLeader(id: string): Observable<LeaderModel> {
    return this.httpClient
      .get<LeaderModel>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }

  getFeaturedLeader(): Observable<LeaderModel> {
    return this.httpClient
      .get<LeaderModel>(baseURL + 'leadership?featured=true')
      .pipe(map((leaders) => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }
}
