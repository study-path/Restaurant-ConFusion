import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { expand, flyInOut } from '../animations/app.animation';
import { LeaderModel } from '../shared/models/leader-model';
import { LeaderService } from './../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut(), expand()],
})
export class AboutComponent implements OnInit {
  leaders: LeaderModel[];
  leaderErrMessage: string;

  constructor(
    private leaderService: LeaderService,
    private activatedRoute: ActivatedRoute,
    @Inject('BaseURL') private BaseURL
  ) {}

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(
      (leaders) => (this.leaders = leaders),
      (leaderErrMessage) => (this.leaderErrMessage = <any>leaderErrMessage)
    );
  }
}
