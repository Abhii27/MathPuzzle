import { AbstractControl } from "@angular/forms";


export class MathValidator {

    static addition(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[sourceTwo];

            if (firstNumber + secondNumber === parseInt(sum)) {
                return null;
            }
            return { addition: true }
        }
    }

    static subtraction(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const sub = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[sourceTwo];

            if (firstNumber - secondNumber === parseInt(sub)) {
                return null;
            }
            return { subtraction: true }
        }
    }

    static multiplication(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const mul = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[sourceTwo];

            if (firstNumber * secondNumber === parseInt(mul)) {
                return null;
            }
            return { multiplication: true }
        }
    }

    static division(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const div = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[sourceTwo];

            if (firstNumber / secondNumber === parseInt(div)) {
                return null;
            }
            return { division: true }
        }
    }

}

