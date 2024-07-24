// LCM calculator

//Find greatest Common Divisor
function gcd(a,b){
    while (b !== 0){
        [a,b] = [b, a%b];
    }
    return a;
}

//Find lcm of Two numbers
function lcm(a,b){
    return (a * b) / gcd(a,b);
}

//Find lcm of Multiple numbers
function lcmMultiple(Numbers){
    return Numbers.reduce((acc,num) => lcm(acc,num));
}

//Function hcf of multiple numbers
function hcfMultiple(Numbers) {
    return Numbers.reduce((acc,num) => gcd(acc,num))
}

//Stored the input value convert array, display the values of LCM.
function LCM() {
    event.preventDefault();
    let input = document.getElementById("inputField").value;
    let Numbers = input.split(',').map(Number);
    let answer = lcmMultiple(Numbers);
    document.getElementById('output').innerText = answer;
}

//Stored the input value convert array, display the values of HCF.
function HCF(){
    event.preventDefault();
    let input = document.getElementById("inputField").value;
    let Numbers = input.split(',').map(Number);
    let answer = hcfMultiple(Numbers)
    document.getElementById('output').innerText = answer;
}