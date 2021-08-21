// js bài tập 1:

function checkmoneye() {
    let inputNum1;
    let inputNum2;
    inputNum1 = document.getElementById("Fillnum1").value;
    let n1 = parseInt(inputNum1);
    inputNum2 = document.getElementById("Fillnum2").value;
    let n2 = parseInt(inputNum2);
    let p = n2 - n1;
    let p1 = p * 1678;
    let p2 = 50 * 1678 + (p - 50) * 1734;
    let p3 = 50 * 1678 + 50 * 1734 + (p - 100) *2014;
    let p4 = 50 * 1678 + 50 * 1734 + 100 * 2014 + (p - 200) *2536;
    let p5 = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (p - 300) *2834;
    let p6 = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (p - 400) *2927;

    if (p < 0) {
        document.getElementById("result").innerText = "Wrong! Please refill number!"
    } else if (p < 51) {
        document.getElementById("result").innerText = "Result: " + p1;
    } else if (p < 101) {
        document.getElementById("result").innerText = "Result: " + p2;
    } else if (p < 201) {
        document.getElementById("result").innerText = "Result: " + p3;
    } else if (p < 301) {
        document.getElementById("result").innerText = "Result: " + p4;
    } else if (p < 401) {
        document.getElementById("result").innerText = "Result: " + p5;
    } else {
        document.getElementById("result").innerText = "Result: " + p6;
    }
}



// js bài tập 2:

function checksalary() {
    let inputWage;
    inputWage = document.getElementById("wage").value;
    let wage = inputWage.toUpperCase()
    let inputDay;
    inputDay = document.getElementById("day").value;
    let d = parseInt(inputDay);

    switch (wage) {
        case "A" :
            document.getElementById("result").innerText = "Your salary is: " + (5000000 *  d / 22).toFixed(0) + " VND";
            break;
        case "B" :
            document.getElementById("result").innerText = "Your salary is: " + (6000000 *  d / 23).toFixed(0) + " VND";
            break;
        case "C" :
            document.getElementById("result").innerText = "Your salary is: " + (8000000 *  d / 23).toFixed(0) + "VND";
            break;
        case "D" :
            document.getElementById("result").innerText = "Your salary is: " + (10000000 *  d / 23).toFixed(0) + " VND";
            break;
        default:
            document.getElementById("result").innerText = " Please refill day or wage";
    }
}