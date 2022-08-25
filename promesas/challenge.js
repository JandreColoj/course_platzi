import axios from 'axios';

const URL = 'https://api.escuelajs.co/api/v1/';

function getProdcuts() {
   
   axios.get(URL+'products')
      .then((resp) => {
         return resp.data;
      }).then((products) => {
         return axios.get(`${URL}products/${products[10].id}`);
      }).then((product) => {
         return axios.get(`${URL}categories/${product.data.category.id}`); 
      }).then((category) => { 
         console.log('la categoria del producto es: ', category.data.name);
      }).catch(err => { 
         console.log(err);
      }).finally(() => {
         console.log('termino');
      });
}

getProdcuts();