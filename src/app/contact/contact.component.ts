import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { expand, flyInOut, visibility } from '../animations/app.animation';
import { FeedbackService } from '../services/feedback.service';
import { ContactType, FeedbackModel } from './../shared/models/feedback-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block;',
  },
  animations: [flyInOut(), visibility(), expand()],
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: FeedbackModel;
  contactType = ContactType;

  errMessage: string;
  isSending: boolean = false;

  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    firstName: '',
    lastName: '',
    telnumber: '',
    email: '',
  };

  validationMessages = {
    firstName: {
      required: 'First name is required.',
      minlength: '"First name must be at least 2 characters long.',
      maxlength: 'First name cannot be more than 25 characters long.',
    },
    lastName: {
      required: 'Last name is required.',
      minlength: 'Last name must be at least 2 characters long.',
      maxlength: 'Last name cannot be more than 25 characters long.',
    },
    telnumber: {
      required: 'Tel. number is required.',
      pattern: 'Tel.number must contain only numbers.',
    },
    email: {
      required: 'Email is required.',
      email: 'Email is not in valid format.',
    },
  };

  constructor(
    private formBuilder: FormBuilder,
    private feedbackService: FeedbackService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.feedbackForm = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      telnumber: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: '',
    });

    this.feedbackForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); //(re)set form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error message(if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.isSending = true;
    this.feedbackService.submitFeedback(this.feedback).subscribe(() => {
      this.isSending = false;

      this.feedback = this.feedbackForm.value;

      setTimeout(() => {
        this.feedback = null;

        this.feedbackForm.reset({
          firstname: '',
          lastname: '',
          telnumber: 0,
          email: '',
          agree: false,
          contactType: 'None',
          message: '',
        });

        this.feedbackFormDirective.resetForm();
      }, 5000);
    });
  }
}
