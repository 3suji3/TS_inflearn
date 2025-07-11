/**
 * 클래스
 */
let studentA = {
    name: "공주",
    grade: "A",
    age: 17,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요");
    },
};
class Student {
    // 필드: 클래스가 만들어낼 객체 프로퍼티를 의미
    name;
    grade;
    age;
    //생성자: 실제로 객체를 생성한다
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    //매서드
    study() {
        console.log("열심히 공부 함");
    }
    introduce() {
        console.log(`안녕하세요~ ${this.name} 입니다!!`);
    }
}
class StudentDeveloper extends Student {
    //필드
    favoriteSkill;
    //생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    //매서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}
const studentDeveloper = new StudentDeveloper("쿠타오", "C+", 15, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
export {};
// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스 
// let studentB = new Student('공주', 'B+', 18);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
