import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
})
export class ItemCreateComponent {
  itemForm: FormGroup = new FormGroup({
    project: new FormControl({ label: '', name: '', value: '' }),
    name: new FormControl('', { validators: [Validators.required] }),
    category: new FormControl({ label: '', name: '', value: '' }),
  });
  //   Type this when backend creates model
  initialValue: any = {
    project: { label: '', name: '', value: '' },
    name: '',
    category: { label: '', name: '', value: '' },
  };
  projects = [
    {
      label: 'Project 1',
      value: '1',
      name: 'Project 1',
    },
    {
      label: 'Project 2',
      value: '2',
      name: 'Project 2',
    },
  ];
  categories = [
    {
      label: 'Category 1',
      value: '1',
      name: 'Category 1',
    },
    {
      label: 'Category 2',
      value: '2',
      name: 'Category 2',
    },
  ];

  constructor() {}

  updateValue(value: string, field: string) {
    if (
      (field === 'category' || field === 'project') &&
      Object.keys(value).length === 2
    ) {
      this.itemForm.patchValue({
        [field]: { label: '', name: '', value: '' },
      });
      this.itemForm.controls[field].markAsPristine();

      return;
    }

    this.itemForm.controls[field].markAsDirty();
    this.itemForm.patchValue({ [field]: value });
  }

  onSubmit() {
    console.log('Your form data : ', this.itemForm);
  }

  onReset() {
    this.itemForm.reset(this.initialValue);
  }
}
