import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss'],
})
export class EmiCalculatorComponent implements OnInit {

  amount: any
  rate: any
  months: any

  constructor() { }
  ngOnInit() {
    let amount = 1000000
    let rate = 12
    let months = 24
    let interest = (amount * (rate * 0.01))/months;
    let total = ((amount/months) + interest);
    console.log(total)
  }

}
