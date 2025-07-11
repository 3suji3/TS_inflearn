/**
 * 첫번째 사례
 */

function swap<T, U>(a: T,b: U) { 
  return [b, a]
}

const [a, b] = swap("1", 2); // T:string, U:number

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
//0

let str = returnFirstValue([1, "hello", "mynameis"]);
//"hello"

/**
 * 세번째 사례
 */

interface interfaceA {
  length : number;
}

interface interfaceB extends interfaceA {}

function getLength<T extends { length: number }>(data : T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //3

let var2 = getLength("12345"); //5

let var3 = getLength({ length: 10 }); //10

// let var4 = getLength(10); length 프로퍼티가 없는 값들은 허용이 안되게 함 