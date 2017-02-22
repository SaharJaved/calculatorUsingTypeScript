class calculation {
    operator: string;
    number_1: string = "";
    number_2: string = "";
    flag: boolean = true;
    result: string = "";

    clearRes() {
        this.number_1 = '';
        this.number_2 = '';
        this.result = '';
        (document.getElementById("text")as HTMLInputElement).value = '';
        console.log(this.number_1);
        this.flag = true;
    }


    operators = function (value) {
        if (value == '+') {
            this.operator = '+';
            console.log(this.operator);
            this.flag = false;
            (document.getElementById("text")as HTMLInputElement).value = this.operator;

        }
        else if (value == '-') {
            this.operator = '-';
            console.log(this.operator);
            (document.getElementById("text") as HTMLInputElement).value = this.operator;
            this.flag = false;
        }
        else if (value == '/') {
            this.operator = '/';
            console.log(this.operator);
            (document.getElementById("text")as HTMLInputElement).value = this.operator;
            this.flag = false;
        }
        else if (value == '*') {
            this.operator = '*';
            console.log(this.operator);
            (document.getElementById("text") as HTMLInputElement).value = this.operator;
            this.flag = false;
        }
    }

    digit = function (value) {

        console.log(this.flag);


        if (this.flag) {

            console.log(this.number_1);

            this.number_1 += value;


            (document.getElementById("text")as HTMLInputElement).value = this.number_1;
            console.log(this.number_1);
            console.log(this.flag);

        }
        else {
            parseFloat(this.number_2);

            this.number_2 += value;
            (document.getElementById("text") as HTMLInputElement).value = this.number_2;
            console.log(this.flag);

            console.log(this.number_2);
            console.log(this.flag);

        }
    }

    calculation = function () {


        switch (this.operator) {
            case '+': {

                this.result = parseFloat(this.number_1) + parseFloat(this.number_2);
                parseFloat(this.result);
                (document.getElementById("text")as HTMLInputElement).value = this.result;
                (document.getElementById("showValue") as HTMLInputElement).value = "add"
                break;


            }


            case '-': {
                this.result = parseFloat(this.number_1) * parseFloat(this.number_2);
                parseFloat(this.result);
                (document.getElementById("text")as HTMLInputElement).value = this.result;
                (document.getElementById("showValue") as HTMLInputElement).value = "subtract"
                break;
            }
            case '/': {     
                this.result = parseFloat(this.number_1) / parseFloat(this.number_2);
                parseFloat(this.result);
                (document.getElementById("text")as HTMLInputElement).value = this.result;
                (document.getElementById("showValue") as HTMLInputElement).value = "divide"
                break;
            }
            case '*': {
                this.result = parseFloat(this.number_1) * parseFloat(this.number_2);
                parseFloat(this.result);
                (document.getElementById("text")as HTMLInputElement).value = this.result;
                (document.getElementById("showValue") as HTMLInputElement).value = "multiply"
                break;
            }
            default: {
                (document.getElementById("text")as HTMLInputElement).value = "error";

                break;
            }
        }
        this.number_1 = this.result;
        this.number_2 = "";

    }

}
let cl = new calculation();
