// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
// 타입 가드: 타입을 좁힐 수 있도록 도와주는 것
// instanceof 왼쪽에 value라는 값이 오른쪽의 객체냐 묻는 것
function func(value : number | string | Date | null | Person) {
  if(typeof value === 'number') {
    console.log(value.toFixed())
  }
  else if (typeof value === "string") {
    console.log(value.toUpperCase())
  }
  else if (value instanceof Date) {
    console.log(value.getTime())
  }
  else if(value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }
}