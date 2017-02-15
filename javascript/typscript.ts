/**
 * Created by wahaj on 2/10/2017.
 */
var message: string = "Hello World"
console.log(message)

class calculations
{



    addition(n1:number,n2:number):number{
        return n1+n2;
    }
    subtraction(n1:number,n2:number):number{
        return n1-n2;
    }

    multiplication(n1:number,n2:number):number{
        return n1*n2;
    }

    division(n1:number,n2:number):number{
        return n1/n2;
    }

    operator(op:string):string
    {
        switch(op) {
            case '+': {
                op='+';
                console.log(op);

                break;
            }
            case '-': {
                op='-';
                console.log(op);

                break;
            }
            case '*': {
                op='*';
                console.log(op);

                break;
            }
            case '/': {
                op='/';
                console.log(op);

                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
        return op;
    }






}

let op=new calculations();
var operator;
var number_1 = "";
var number_2 = "";
var flag = true;
var result ;

var operators = function (value) {
 operator= op.operator(value);
flag=false;
  }

function digit(value) {

    console.log(flag);



    if (flag) {

        console.log(number_1);

        number_1 += value;


        (document.getElementById("text") as HTMLInputElement).value = number_1;
        console.log(number_1);
        console.log(flag);

    }
    else {
        parseFloat(number_2);

        number_2 += value;
        (document.getElementById("text") as HTMLInputElement).value = number_2;
        console.log(flag);

        console.log(number_2);
        console.log(flag);

    }
}
function res() {
    switch (operator) {
        case '+': {
            result =op.addition(parseFloat(number_1),parseFloat(number_2));
            parseFloat(result);
            (document.getElementById("text") as HTMLInputElement).value = result;

            break;
        }
        case '-': {
            result =op.subtraction(parseFloat(number_1),parseFloat(number_2));
            parseFloat(result);
            (document.getElementById("text") as HTMLInputElement).value = result;
            break;
        }
        case '*': {
            result =op.multiplication(parseFloat(number_1),parseFloat(number_2));
            parseFloat(result);
            (document.getElementById("text") as HTMLInputElement).value = result;
            break;
        }
        case '/': {
            result =op.division(parseFloat(number_1),parseFloat(number_2));
            parseFloat(result);
            (document.getElementById("text") as HTMLInputElement).value = result;
            break;
        }
        default: {
            console.log("Invalid choice");
            break;
        }
    }
    number_1 = result;
    console.log(number_1);
    number_2 = "" ;


}

function clearRes() {
    number_1 = '';
    number_2 = '';
    result = '';
    (document.getElementById("text") as HTMLInputElement).value = '';
    console.log(number_1);
    flag = true;
}
