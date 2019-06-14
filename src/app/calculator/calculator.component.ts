import { Component, EventEmitter, Output } from '@angular/core';

interface IOperator {
  displayName: string;
  calc: any;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class Calculator {
  @Output() changeResult = new EventEmitter<any>();
  numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  // actions = ["+", "-", "/", "*", "^", "="];
  actions: IOperator[] = [
    {
      displayName: "+",
      calc: () => {
        this.number1 = parseFloat(this.number1) + parseFloat(this.number2);
      }
    },
    {
      displayName: "-",
      calc: () => {
        this.number1 = parseFloat(this.number1) - parseFloat(this.number2);
      }
    },
    {
      displayName: "/",
      calc: () => {
        this.number1 = parseFloat(this.number1) / parseFloat(this.number2);
      }
    },
    {
      displayName: "*",
      calc: () => {
        this.number1 = parseFloat(this.number1) * parseFloat(this.number2);
      }
    },
    {
      displayName: "^",
      calc: () => {
        this.number1 = Math.pow(parseFloat(this.number1), parseFloat(this.number2));
      }
    },
    {
      displayName: "=",
      calc: () => {
        this.number1 = Math.pow(parseFloat(this.number1), parseFloat(this.number2));
      }
    },
  ];

  number1;
  number2;
  myaction;
  number_i = 1;
  number(the_number) {
    if (the_number == "delete") {
      if (this.number_i == 1) {
        this.number1 = this.number1.slice(0, this.number1.length - 1);
      }
      else {
        this.number2 = this.number2.slice(0, this.number2.length - 1);
      }
    }
    else {
      if (this.number_i == 1) {
        if (this.number1 == "0" || !this.number1) {
          if (the_number != ".") {
            this.number1 = "" + the_number;
          }
          else {
            this.number1 = "0" + the_number;
          }
        }
        else {
          this.number1 += "" + the_number;
        }
      }
      else {
        if (this.number2 == "0" || !this.number2) {
          if (the_number != ".") {
            this.number2 = "" + the_number;
          }
          else {
            this.number2 = "0" + the_number;
          }
        }
        else {
          this.number2 += "" + the_number;
        }
      }
    }
  }
  action(theAction) {



    if (this.number1) {

      if (theAction.displayName != "=") {
        this.number_i = 2;
        this.myaction = theAction.displayName;
      }
      else {
        this.changeResult.emit(this.number1+this.myaction+this.number2);
        const selectedAction = this.actions.find(a => {
          return a.displayName == this.myaction;
        });
        selectedAction.calc();

        // if (this.myaction == "+") {
        //   this.number1 = parseFloat(this.number1) + parseFloat(this.number2);
        // }
        // else if (this.myaction == "-") {
        //   this.number1 = parseFloat(this.number1) - parseFloat(this.number2);
        // }
        // else if (this.myaction == "/") {
        //   this.number1 = parseFloat(this.number1) / parseFloat(this.number2);
        // }
        // else if (this.myaction == "*") {
        //   this.number1 = parseFloat(this.number1) * parseFloat(this.number2);
        // }
        // else if (this.myaction == "^") {
        //   this.number1 = Math.pow(parseFloat(this.number1), parseFloat(this.number2));
        // }
        this.myaction = null;
        this.number2 = null;
        this.number_i = 1;
      }
    }
  }
}