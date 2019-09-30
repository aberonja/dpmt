import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, OnDestroy {
  @Input() set id(id: number) {
    this.id$.next(id);
  }
  private id$ = new BehaviorSubject<number>(null);
  profileForm: FormGroup;
  //   Type this when backend creates model
  initialValue: any;
  countries = [
    {
      label: 'Serbia',
      value: '1',
      name: 'Serbia',
    },
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.id$.subscribe(id => {
      this.profileForm = new FormGroup({
        id: new FormControl(id, { validators: [Validators.required] }),
        firstName: new FormControl('', { validators: [Validators.required] }),
        lastName: new FormControl('', { validators: [Validators.required] }),
        email: new FormControl('', {
          validators: [Validators.email],
        }),
        userPrincipalName: new FormControl('', {
          validators: [Validators.required],
        }),
        organization: new FormControl('', {
          validators: [Validators.required],
        }),
        addressLine: new FormControl('', { validators: [Validators.required] }),
        city: new FormControl('', { validators: [Validators.required] }),
        country: new FormControl(
          { label: '', name: '', value: '' },
          { validators: [Validators.required] }
        ),
        phoneNumber: new FormControl('', { validators: [Validators.required] }),
        sapId: new FormControl('', { validators: [Validators.required] }),
      });

      this.initialValue = {
        id,
        firstName: '',
        lastName: '',
        email: '',
        userPrincipalName: '',
        organization: '',
        addressLine: '',
        city: '',
        country: { label: '', name: '', value: '' },
        phoneNumber: '',
        sapId: '',
      };
    });
  }

  ngOnDestroy() {
    this.id$.unsubscribe();
  }

  updateValue(value: string, field: string) {
    if (Object.keys(value).length === 2) {
      this.profileForm.patchValue({
        [field]: { label: '', name: '', value: '' },
      });
      this.profileForm.controls[field].markAsPristine();

      return;
    }

    this.profileForm.controls[field].markAsDirty();
    this.profileForm.patchValue({ [field]: value });
  }

  onSubmit() {
    console.log('Your form data : ', this.profileForm);
  }

  onReset() {
    this.profileForm.reset(this.initialValue);
  }
}
