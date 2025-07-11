/**
 * 조건부 타입
 */

//조건에 따라서 타입을 결정하는 문법
//예시
type A = number extends string ? string : number;

type ObjA = {
  a : number
}

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>

let varB : StringNumberSwitch<string>

function removeSpaces<T>(text : T) : T extends string ? string : undefined 
function removeSpaces(text: any) {
  if(typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
  // replaceAll: 이 문자열(text)에서 첫번째 인수에 핻당하는 모든 문자들을 찾아서 두번째 인수로 바꿔주는 메서드
  // 모든 공백은 빈 문자로 바꿔줌(공백제거)
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);
