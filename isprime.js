// 0 not prime
//1 not prime 1, 1
//2 prime 1,2 -- only even num is prime
//3 prime 1, 3
//4 1,2,4 //all even numbers not prime

let isPrimeNumber = (number) => {

if(number === 2) {
  console.log('true')

return  true
}
if(number < 2 || (number%2 === 0)) {
  console.log('false')

return  false
}
//for given number start from 2
//until reach n-1
//exclude n , exclude 1
//divide number by all these numbers
 for (let i = 3; i < number-1; i++ ){
   if(number%i === 0) {
     console.log('false')

     return false;
   }
 }
 console.log('true')
  return true
}

isPrimeNumber(5)
