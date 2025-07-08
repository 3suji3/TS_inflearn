// any
// 특정 변수의 타입을 확실히 모를 때 사용
// 타입스크립트의 타입 검사를 어찌되든 다 통과하는 치트키
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
export {};
