const animales = 85;


const countAniamles = new Promise((resolve, reject) => {
  
   if (animales > 10) {
      resolve('Tenemos muchos animales');
   } else {
      reject('No tenemos animales');
   }
}); 

countAniamles.then(result => {
   console.log('result:',result);
}).catch(error => {
   console.log('Error:',error);
}).finally(() => {
   console.log('Fin del programa');
});