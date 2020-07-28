import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ContactType, FeedbackModel } from './../shared/models/feedback-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: FeedbackModel;
  contactType = ContactType;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.feedbackForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      telnumber: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: '',
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }
}
