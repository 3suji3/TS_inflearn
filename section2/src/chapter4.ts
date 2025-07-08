// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id : 1,
  name : "부자",
  nickname : "1997.01.07",
  birth : "1997.01.07",
  bio : "안녕하세요",
  location : "부천시",
};

let user2: User = {
  id : 1,
  name : "공주",
  nickname : "1997.01.07",
  birth : "1997.01.07",
  bio : "안녕하세요",
  location : "부천시",
}

//인덱스 시그니처
type CountryCodes = {
  [key : string] : string;
}

let countryCodes: CountryCodes = {
  korea : 'ko',
  UnitedState : 'us',
  UnitedKingdom : 'uk',
}

