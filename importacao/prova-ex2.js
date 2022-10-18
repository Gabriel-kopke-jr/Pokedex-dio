var numbers = [0,1,2,3,4,5,6,7,8,9,10];
numbers = numbers.sort()
var maiorNumeroPar = -1;
var maiorNumeroImpar = -1;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
        if(element % 2 == 0 && element > maiorNumeroPar){
            maiorNumeroPar = element
        }
        if(element % 2 != 0 && element > maiorNumeroImpar ){
            maiorNumeroImpar = element
        }
    
}

console.log(maiorNumeroImpar, "   ", maiorNumeroPar)    