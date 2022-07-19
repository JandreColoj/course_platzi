var init = 100;


//GLOBAL SCOPE

var fruit = 'Apple';
console.log(fruit);

const bestFruit = () => {
   console.log(fruit);
}

bestFruit();


const country = () => {
   pais = 'Guatemala'; //global
   console.log(pais);
}

country()
console.log(pais);