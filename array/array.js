class mainArray{

   constructor(){
      this.length = 0;
      this.data = {};
   }

   get(index){
      return this.data[index];
   }

   push(item){
      this.data[this.length] = item;
      this.length++;
      return this.data;
   }

   pop(){
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
   }

   delete(index){
      const item = this.data[index];
      this.shiftItems(index);
      return item;
   }

   shiftItems(index){
      for(let i = index; i < this.length - 1; i++){
         this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
   }

   unshift(item){
      this.shiftItems(0);
      this.data[0] = item;
      this.length++;
      return this.data;
   }

   shift(){
      const firstItem = this.data[0];
      this.shiftItems(0);
      return firstItem;
   }

   forEach(fn){
      for(let i = 0; i < this.length; i++){
         fn(this.data[i], i, this.data);
      }
   }

   map(fn){
      const result = [];
      for(let i = 0; i < this.length; i++){
         result.push(fn(this.data[i], i, this.data));
      }
      return result;
   }

   filter(fn){
      const result = [];
      for(let i = 0; i < this.length; i++){
         if(fn(this.data[i], i, this.data)){
            result.push(this.data[i]);
         }
      }
      return result;
   }

   reduce(fn, initial){
      let accumulator = initial;
      for(let i = 0; i < this.length; i++){
         accumulator = fn(accumulator, this.data[i], i, this.data);
      }
      return accumulator;
   }

   sort(fn){
      const result = this.data.slice();
      result.sort(fn);
      return result;
   }

   reverse(){
      const result = this.data.slice();
      result.reverse();
      return result;
   }

   toString(){
      return this.data.toString();
   }

   valueOf(){
      return this.data.valueOf();
   }

   join(separator){
      return this.data.join(separator);
   }

   concat(...items){
      const result = this.data.slice();
      for(let i = 0; i < items.length; i++){
         result.push(items[i]);
      }
      return result;
   }

   slice(start, end){
      return this.data.slice(start, end);
   }

   splice(start, deleteCount, ...items){
      const result = this.data.slice(start, start + deleteCount);
      this.shiftItems(start);
      for(let i = 0; i < items.length; i++){
         this.data[start + i] = items[i];
      }
      this.length += items.length;
      return result;
   }

   indexOf(item, start){
      return this.data.indexOf(item, start);
   }

   lastIndexOf(item, start){
      return this.data.lastIndexOf(item, start);
   }

   every(fn){
      for(let i = 0; i < this.length; i++){
         if(!fn(this.data[i], i, this.data)){
            return false;
         }
      }
      return true;
   }  

   some(fn){
      for(let i = 0; i < this.length; i++){
         if(fn(this.data[i], i, this.data)){
            return true;
         }
      }
      return false;
   }

   reduceRight(fn, initial){    
      let accumulator = initial;
      for(let i = this.length - 1; i >= 0; i--){
         accumulator = fn(accumulator, this.data[i], i, this.data);
      }
      return accumulator;
   }

   fill(value, start, end){   
      for(let i = start; i < end; i++){
         this.data[i] = value;
      }
      return this.data;
   }

   copyWithin(target, start, end){   
      for(let i = start; i < end; i++){
         this.data[target + i] = this.data[i];
      }
      return this.data;
   }

   entries(){   
      const result = [];
      for(let i = 0; i < this.length; i++){
         result.push([i, this.data[i]]);
      }
      return result;
   }

   keys(){
      const result = [];
      for(let i = 0; i < this.length; i++){
         result.push(i);
      }
      return result;
   }

   values(){
      const result = [];
      for(let i = 0; i < this.length; i++){
         result.push(this.data[i]);
      }
      return result;
   }

   [Symbol.iterator](){
      let index = 0;
      return {
         next: () => {
            if(index < this.length){
               return {
                  value: this.data[index++],
                  done: false
               };
            } else {
               return {
                  done: true
               };
            }
         }
      };
   }

   
}

const array = new mainArray();

array.push('Hello');
array.push('world');

console.log(array.get(1));

console.log(array);