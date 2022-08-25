const sum = (num1, num2) => {
   return num1+num2;
}


const calc = (num1, num2, callback) => {
   return callback(num1, num2);
}

console.log(calc(20, 100, sum));



setTimeout(function(){
   console.log('Javascript settimeout');
},2000)



const saludar = (name) => {
   console.log(`Hola ${name}`);
}

setTimeout(saludar, 3000, 'Julio');