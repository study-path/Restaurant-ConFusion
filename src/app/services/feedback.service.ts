import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseURL';
import { FeedbackModel } from '../shared/models/feedback-model';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(
    private httpClient: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  submitFeedback(feedbackMessage: FeedbackModel): Observable<FeedbackModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient
      .post<FeedbackModel>(baseURL + 'feedback', feedbackMessage, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handlerError));
  }
}
