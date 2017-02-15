var operator;
var number_1 = "";
var number_2 = "";
var flag = true;
var result = "";
function clearRes() {
    number_1 = '';
    number_2 = '';
    result = '';
    document.getElementById("text").value = '';
    console.log(number_1);
    flag = true;
}


var operators = function (value) {
    if (value == '+') {
        operator = '+';
        console.log(operator);
        flag = false;
        document.getElementById("text").value = operator;

    }
    else if (value == '-') {
        operator = '-';
        console.log(operator);
        document.getElementById("text").value = operator;
        flag = false;
    }
    else if (value == '/') {
        operator = '/';
        console.log(operator);
        document.getElementById("text").value = operator;
        flag = false;
    }
    else if (value == '*') {
        operator = '*';
        console.log(operator);
        document.getElementById("text").value = operator;
        flag = false;
    }
}

function digit(value) {

    console.log(flag);



    if (flag) {

        console.log(number_1);

        number_1 += value;


        document.getElementById("text").value = number_1;
        console.log(number_1);
        console.log(flag);

    }
    else {
        parseFloat(number_2);

        number_2 += value;
        document.getElementById("text").value = number_2;
        console.log(flag);

        console.log(number_2);
        console.log(flag);

    }
}

var calculation = function () {


    switch (operator) {
        case '+': {

                result = parseFloat(number_1) + parseFloat(number_2);
                parseFloat(result);
                document.getElementById("text").value = result;

                break;


        }


        case '-': {
            result = parseFloat(number_1) * parseFloat(number_2);
            parseFloat(result);
            document.getElementById("text").value = result;
            break;
        }
        case '/': {
            result = parseFloat(number_1) / parseFloat(number_2);
            parseFloat(result);
            document.getElementById("text").value = result;
            break;
        }
        case '*': {
            result = parseFloat(number_1) * parseFloat(number_2);
            parseFloat(result);
            document.getElementById("text").value = result;
            break;
        }
        default: {
            document.getElementById("text").value = "error";

            break;
        }
    }
    number_1 = result;
    number_2 = "" ;

}
