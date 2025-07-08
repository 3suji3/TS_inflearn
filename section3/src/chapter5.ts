// 타입 추론

let a = 10;
let b = "hello";
let c = {
  id : 1, 
  name: "사람",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
}

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// 변수를 선언하고 초기값을 지정하지 않으면 안목적인 Any 타입으로 추론이 됨 (추천하지 않음)
// 타입이 계속 진화함 지정하는거에 따라서 
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];

// TypeScript는 웬만한 변수는 모두 다 Type을 자동으로 추론을 하고 
// const로 선언된 상수가 아니면 Type을 넓혀서 좀 더 범용적으로 변수를 사용할 수 있도록 
// Type 넓히기를 통해 Type을 잘 추론해준다. 