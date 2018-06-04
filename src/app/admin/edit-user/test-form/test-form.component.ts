import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SomeNumberValidator } from './custom-validators';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  testForm = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    email: new FormControl(),
    number: new FormControl('', SomeNumberValidator()),
    abilities: new FormArray([])
  });
  constructor() { }

  get abilities(): FormArray {
    return this.testForm.get('abilities') as FormArray;
  }

  ngOnInit() {
  }

  addNewAbility(): void {
    const ability = new FormControl('');
    this.abilities.push(ability);
  }

  removeAbility(index): void {
    this.abilities.removeAt(index);
  }
}
