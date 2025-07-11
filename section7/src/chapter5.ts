/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject)=>{
  setTimeout(() => {
    // resolve(20);
    reject("~~때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); //20
});

promise.catch((err) =>{
  if(typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post>{ //반환값 타입을 직접 정의하는게 협업하는데 더 좋다
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "test 제목",
        content: "test 컨텐츠,"
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id
});