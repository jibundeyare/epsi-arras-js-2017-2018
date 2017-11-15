class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

class Student extends Person {
  private _grade: number;

  constructor(name: string, grade: number) {
    super(name);
    this._grade = grade;
  }

  upgrade() {
    this._grade++;
  }

  get grade() {
    return this._grade;
  }

  set grade(grade: number) {
    this._grade = grade;
  }
}

let p = new Person('Toto');
console.log(p.name);

let s = new Student('Titi', 3);
s.upgrade();
console.log(s.grade);
