import { Location } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DishService } from './../services/dish.service';
import { CommentModel } from './../shared/models/comment-model';
import { DishModel } from './../shared/models/dish-model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
})
export class DishDetailComponent implements OnInit {
  dish: DishModel;
  dishIds: string[];
  prev: string;
  next: string;

  commentForm: FormGroup;

  date = new Date();

  rating: number;
  errMessage: string;
  dishcopy: DishModel;

  @ViewChild('cform') commentFormDirective;

  formErrors = {
    author: '',
    comment: '',
  };

  validationMessages = {
    author: {
      required: 'Author name is required.',
      minlength: '"Author name must be at least 2 characters long.',
    },
    comment: {
      required: 'Comment is required.',
      minlength: 'Comment must be at least 2 characters long.',
    },
  };

  constructor(
    private dishService: DishService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    @Inject('BaseURL') private BaseURL
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dishService
      .getDishIds()
      .subscribe((dishIds) => (this.dishIds = dishIds));

    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => this.dishService.getDish(params['id']))
      )
      .subscribe(
        (dish) => {
          this.dish = dish;
          this.dishcopy = dish;
          this.setPrevNext(dish.id);
        },
        (errMessage) => (this.errMessage = <any>this.errMessage)
      );
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      author: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      rating: 1,
      comment: ['', Validators.required],
    });

    this.commentForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); //(re)set form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
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

  updateSetting(event) {
    this.rating = event.value;
  }

  getComment() {
    return this.commentForm.controls.comment.value;
  }

  getRatting() {
    return this.commentForm.controls.rating.value;
  }

  getAuthor() {
    return this.commentForm.controls.author.value;
  }

  onSubmit() {
    const comment: CommentModel = this.commentForm.value;
    comment.date = new Date().toDateString();
    this.dishcopy.comments.push(comment);
    this.dishService.putDish(this.dishcopy).subscribe(
      (dish) => {
        this.dish = dish;
        this.dishcopy = dish;
      },
      (errMessage) => {
        this.dish = null;
        this.dishcopy = null;
        this.errMessage = <any>errMessage;
      }
    );

    this.commentForm.reset({
      author: '',
      rating: 0,
      comment: '',
    });
    this.commentFormDirective.resetForm();
  }
}
