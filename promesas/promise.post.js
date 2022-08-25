const axios = require('axios');

const URL = 'https://api.escuelajs.co/api/v1/';

function createProdcuts(product) {   
   axios.post(`${URL}products`, product, { 
      headers: {
         Accept: 'application/json'
       }, 
   }).then((resp) => {
      console.log(resp.data)
   }).catch(err => { 
      console.log(err);
   }); 
}

const product = {
   "title": "Case de computadora 225",
   "price": 200,
   "description": "A description",
   "categoryId": 1,
   "images": ["https://placeimg.com/640/480/any"]
}

createProdcuts(product);