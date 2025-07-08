// 타입 단언

type Person = {
  name : string;
  age : number;
}

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name : "돌돌이",
  color : "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; (오류뜸)
let num3 = 10 as unknown as string; //웬만하면 사용하지 말자

// const 단원
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = '' 안됨
// as const를 사용하면 모든 프로퍼티를 read-only 프로퍼티로 만들 수 있다.

// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post : Post = {
  title : "게시글1",
  author : "사람"
}

const len : number = post.author!.length;
// 옵셔널 체이닝: author property 값이 null이거나 undefined일 경우에 점표기법으로 접근하면 오류가 발생하니까 물음표를 붙여주면 전체가 undefined가 되도록 만들어주는 연산자
// ! = 값이 null이거나 undefined가 아닐 것이라고 typescript 컴파일러가 믿도록 만듦



