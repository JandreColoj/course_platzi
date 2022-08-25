const axios = require('axios');
const URL = 'https://api.escuelajs.co/api/v1/';

const getProduct = async ()=>{
   try {
      const product = await axios.get(URL+'products');
      const category = await axios.get(`${URL}categories/${product.data[0].category.id}`); 
      
      console.log('Mostrando el producto: ', product.data[0].description);
      console.log('la categoria del producto es: ', category.data.name);

   } catch (error) {
      console.log(error);
   }
}

getProduct(); 
