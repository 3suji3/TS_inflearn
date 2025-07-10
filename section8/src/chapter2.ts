/**
 * keyof 연산자
 */

// interface Person {
//   name : string;
//   age : number;
// }

type Person =  typeof person;

//keyof 연산자 뒤에는 타입이 와야한다.
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "김개발",
  age: 27,
};

getPropertyKey(person, "name");
