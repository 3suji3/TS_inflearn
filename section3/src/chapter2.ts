// Unknown 타입
function unknownExam() {
  let a : unknown = 1;
  let b : unknown = "hello";
  let c : unknown = true;
  let d : unknown = null;
  let e : unknown = undefined;
}

//Never 타입
// 모든 집합의 부분집합이 된다(=공집합).
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
}

// Void 타입
// 반항값이 없는 함수 (=return X)
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined; // void 타입은 undefined 타입의 super 타입이다.
}

// any 타입(치트키: 타입계층도를 무시)
// 모든 타입의 슈퍼/서브(never 제외) 타입으로 위치
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar;
}


