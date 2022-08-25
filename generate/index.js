function* generate() {
  yield 'Hello';
  yield 'World';
  yield 'more';
}

const gen = generate();

console.log(gen.next().value); // { value: 'Hello', done: false }
console.log(gen.next().value); // { value: 'World', done: false }
console.log(gen.next().value); // { value: 'more', done: false }


function* iterable(array) {
   for (let value of array) {
      yield value;
   }
}

const it = iterable(['Juan', 'Perez', "lopez", 'maria', 'mercedes']);

console.log(it.next().value); // { value: 'Juan', done: false }
console.log(it.next().value); // { value: 'Perez', done: false }
console.log(it.next().value); // { value: 'lopez', done: false }
console.log(it.next().value); // { value: 'maria', done: false }
console.log(it.next().value); // { value: 'mercedes', done: false }
console.log(it.next().value); // { value: undefined, done: true }