import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit, OnDestroy {
  @Input() set id(id: number) {
    this.id$.next(id);
  }
  private id$ = new BehaviorSubject<number>(null);
  itemForm: FormGroup;
  //   Type this when backend creates model
  initialValue: any;
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

  ngOnInit() {
    this.id$.subscribe(id => {
      this.itemForm = new FormGroup({
        id: new FormControl(id, { validators: [Validators.required] }),
        project: new FormControl({ label: '', name: '', value: '' }),
        name: new FormControl('', { validators: [Validators.required] }),
        category: new FormControl({ label: '', name: '', value: '' }),
      });

      this.initialValue = {
        id,
        project: { label: '', name: '', value: '' },
        name: '',
        category: { label: '', name: '', value: '' },
      };
    });
  }

  ngOnDestroy() {
    this.id$.unsubscribe();
  }

  updateValue(value: string, field: string) {
    //   Reseting hybrid field returns two keys instead of 3
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
