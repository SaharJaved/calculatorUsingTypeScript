var calculation = (function () {
    function calculation() {
        this.number_1 = "";
        this.number_2 = "";
        this.flag = true;
        this.result = "";
        this.operators = function (value) {
            if (value == '+') {
                this.operator = '+';
                console.log(this.operator);
                this.flag = false;
                document.getElementById("text").value = this.operator;
            }
            else if (value == '-') {
                this.operator = '-';
                console.log(this.operator);
                document.getElementById("text").value = this.operator;
                this.flag = false;
            }
            else if (value == '/') {
                this.operator = '/';
                console.log(this.operator);
                document.getElementById("text").value = this.operator;
                this.flag = false;
            }
            else if (value == '*') {
                this.operator = '*';
                console.log(this.operator);
                document.getElementById("text").value = this.operator;
                this.flag = false;
            }
        };
        this.digit = function (value) {
            console.log(this.flag);
            if (this.flag) {
                console.log(this.number_1);
                this.number_1 += value;
                document.getElementById("text").value = this.number_1;
                console.log(this.number_1);
                console.log(this.flag);
            }
            else {
                parseFloat(this.number_2);
                this.number_2 += value;
                document.getElementById("text").value = this.number_2;
                console.log(this.flag);
                console.log(this.number_2);
                console.log(this.flag);
            }
        };
        this.calculation = function () {
            switch (this.operator) {
                case '+': {
                    this.result = parseFloat(this.number_1) + parseFloat(this.number_2);
                    parseFloat(this.result);
                    document.getElementById("text").value = this.result;
                    document.getElementById("showValue").value = "add";
                    break;
                }
                case '-': {
                    this.result = parseFloat(this.number_1) * parseFloat(this.number_2);
                    parseFloat(this.result);
                    document.getElementById("text").value = this.result;
                    document.getElementById("showValue").value = "subtract";
                    break;
                }
                case '/': {
                    this.result = parseFloat(this.number_1) / parseFloat(this.number_2);
                    parseFloat(this.result);
                    document.getElementById("text").value = this.result;
                    document.getElementById("showValue").value = "divide";
                    break;
                }
                case '*': {
                    this.result = parseFloat(this.number_1) * parseFloat(this.number_2);
                    parseFloat(this.result);
                    document.getElementById("text").value = this.result;
                    document.getElementById("showValue").value = "multiply";
                    break;
                }
                default: {
                    document.getElementById("text").value = "error";
                    break;
                }
            }
            this.number_1 = this.result;
            this.number_2 = "";
        };
    }
    calculation.prototype.clearRes = function () {
        this.number_1 = '';
        this.number_2 = '';
        this.result = '';
        document.getElementById("text").value = '';
        console.log(this.number_1);
        this.flag = true;
    };
    return calculation;
}());
var cl = new calculation();
