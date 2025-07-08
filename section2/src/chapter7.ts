// void
// void = 공허 ->아무것도 없다
// void = 아무것도 없음을 의미하는 타입
// undefined만 담을 수 있다. 
// but strictNullChecks의 옵션을 끄면 예외적으로 void 타입에 null을 넣을 수 있다.

function fun1(): string {
  return "hello";
}

function fun2(): void {
  console.log("hello")
}

// never
// never = 존재하지 않는
// 불가능한 타입
// 정말 아무런 값도 담을 수 없음

function fun3(): never {
  while (true) {}
}

function fun4(): never {
  throw new Error();
}