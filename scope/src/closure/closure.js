// const moneyBox=(coins)=>{

//    let myCoins = 0;
//    myCoins += coins;

//    console.log(`money ${myCoins}`); 
// }


// moneyBox(5);
// moneyBox(5);

const moneyBox = () =>{

   let _myCoins = 0; 

   const countCoins = (coins)=>{
 
      _myCoins += coins;  
      console.log(`money $ ${_myCoins}`); 
   }

   const decrementar = (coins)=>{
 
      _myCoins -= coins;  
      console.log(`money $ ${_myCoins}`); 
   }
   
   
   return {
      countCoins,
      decrementar
   };
}

const myMoney = moneyBox();

myMoney.countCoins(100);
myMoney.decrementar(5);