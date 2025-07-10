/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// {2, 4, 6}

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i<arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => parseInt(it));

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr.forEach((it) => console.log(it));

function forEach<T>(arr:T[], callback:(item: T)=>void) {
  for(let i =0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(['123', '456'], (it)=>{
  it;
});

//제네릭 함수를 이용하면 매개변수의 타입이 배열이 됐던 함수가 됐던 객체가 됐던 클래스가 됐던 타입을 유연하게 잘 정의할 수 있다.