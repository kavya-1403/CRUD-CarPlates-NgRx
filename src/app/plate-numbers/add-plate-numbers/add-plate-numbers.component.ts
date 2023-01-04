import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { ValidatePlateNumber } from './utils/validation';

import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { PlateActions } from '../store/plate-numbers.action';
import { PlateSelectors } from '../store/plate-numbers.selector';

@Component({
  selector: 'app-add-plate-numbers',
  templateUrl: './add-plate-numbers.component.html',
  styleUrls: ['./add-plate-numbers.component.css'],
})
export class AddPlateNumbersComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router
  ) {}
  plateNumbers$ = this.store.pipe(select(PlateSelectors.selectPlateNumbers));
  data!: any;
  form!: FormGroup;
  id!: string;
  formValue!: Object;
  submitted = false;
  ngOnInit(): void {
    this.plateNumbers$.subscribe((data) => {
      this.data = data;
    });
    this.store.dispatch(PlateActions.loadPlateNumbers());
    this.form = this.formBuilder.group({
      plateNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          ValidatePlateNumber,
          this.validateUniquePlateNumber,
        ],
      ],
      ownerName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  validateUniquePlateNumber = (control: AbstractControl) => {
    const found = this.data?.some(
      (el: any) => el.plateNumber === control?.value
    );
    if (found) {
      return {
        notUniquePlateNumber: true,
      };
    } else return null;
  };
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.id = UUID.UUID();
    this.formValue = { ...this.form.value, id: this.id };
    this.store.dispatch(
      PlateActions.invokeSaveNewPlateNumberAPI({
        newPlateNumber: this.formValue,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
