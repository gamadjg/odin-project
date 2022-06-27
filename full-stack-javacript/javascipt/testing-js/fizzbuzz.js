/*
1. Take user input, has to be a number.
2. Create loop that prints each number up to the user number.
3. Multiples of 3 get replaced by the string 'fizz'
4. Multiples of 5 get replaced by the string 'buzz'
5. Multiples of 3 & 5 get replaced by 'fizzbuzz 

*/

//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
answer = parseInt(20);
for(let i=1; i<=answer; i++){
    
    if((i%5 === 0) && (i%3 === 0)){
        console.log('fizzbuzz');
    }
    else if(i%3 === 0){
        console.log('fizz');
    }
    else if(i%5 === 0){
        console.log('buzz');
    }
    else{
        console.log(i);
    }
}
//console.log('test')