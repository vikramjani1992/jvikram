import { Component, OnInit, ViewChild } from '@angular/core';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  step = 1;
  @ViewChild('stepper') stepper : MatStepper
  constructor() { }

  ngOnInit(): void {
  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
}
