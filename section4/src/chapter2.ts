/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 변환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 변환값이 호환되는가
// 반환값 타입끼릴는 업캐스팅하는 상황에서는 호환된다고 판단
// 다운캐스팅하는 상황에서는 호환되지 않음
type A = () => number;
type B = () => 10;

let a: A = () => 10; //number
let b: B = () => 10; //number 리터럴

a = b;
// b = a;

//기준2. 매게변수가 호환하는가
// 2-1. 매게변수의 개수가 같을 때

type C = (value : number) => void;
type D = (value : number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name : string;
};

type Dog = {
  name : string;
  color : string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

dogFunc = animalFunc;

// 2-2 매게변수의 개수가 다를 때 

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1 : Func1 = (a,b) => {};
let func2 : Func2 = (a) => {};