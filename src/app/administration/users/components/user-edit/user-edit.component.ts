import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnChanges {
  @Input() id: number;
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
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
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
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
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
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
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
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
    {
      label: 'Croatia',
      value: '2',
      name: 'Croatia',
    },
  ];

  constructor() {}

  ngOnChanges() {
    this.profileForm = new FormGroup({
      id: new FormControl(this.id),
      firstName: new FormControl('', { validators: [Validators.required] }),
      lastName: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', {
        validators: [Validators.email],
      }),
      userPrincipalName: new FormControl('', {
        validators: [Validators.required],
      }),
      organization: new FormControl('', { validators: [Validators.required] }),
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
      id: this.id,
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
  }

  updateValue(value: string, field: string) {
    this.profileForm.patchValue({ [field]: value });
  }

  onSubmit() {
    console.log('Your form data : ', this.profileForm);
  }

  onReset() {
    this.profileForm.reset(this.initialValue);
  }
}
