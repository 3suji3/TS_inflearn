// any
// 특정 변수의 타입을 확실히 모를 때 사용
// 타입스크립트의 타입 검사를 어찌되든 다 통과하는 치트키
let anyVar: any = 10;

let num: number = 10;
num = anyVar;

//unknown (any와 비슷함)
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//unknown type은 모든 type의 변수에 집어넣을 수가 없다.
//unknown type은 사칙연산이 불가능하다.

