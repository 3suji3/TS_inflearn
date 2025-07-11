

class Employee {
  //필드
  // private name: string;
  // protected age: number;
  // public position: string;

  //생성자
  constructor(
    private name: string, 
    protected age: number, 
    public position: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log(`${this.name}일함`);
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    this.age; 
    // this.name;
  }
}

const employee = new Employee("김인간", 27, "developer");
// employee.name = '홍길동';
// employee.age = 32;
employee.position = "디자이너";