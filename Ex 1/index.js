function findPrimes() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let count = 0;
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            count++;
            sum += i;
        }
    }
    document.getElementById("result").innerHTML = " các số nguyên tố trong " + a + " và " + b + " là " + count + " số " + " , " + " tổng các số nguyên tố trong " + a + " và " + b + " là " + sum;
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
