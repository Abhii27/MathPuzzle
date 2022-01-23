import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';
import { MathValidator } from '../math-validator';


@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  secondPerSolution = 0
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [
    MathValidator.addition('answer', 'a', 'b'),
    //MathValidator.subtraction('answer1', 'a1', 'b1'),
    //MathValidator.multiplication('answer2', 'a2', 'b2'),
    //MathValidator.division('answer3', 'a3', 'b3')
  ])

  constructor() { }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit() {
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100),
      scan((acc) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      }, { numberSolved: 0, startTime: new Date() })
    )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondPerSolution = (
          new Date().getTime() - startTime.getTime()
        ) / numberSolved / 1000

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        })

      })
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }

}
