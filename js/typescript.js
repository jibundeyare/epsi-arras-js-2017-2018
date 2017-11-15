var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, grade) {
        _super.call(this, name);
        this._grade = grade;
    }
    Student.prototype.upgrade = function () {
        this._grade++;
    };
    Object.defineProperty(Student.prototype, "grade", {
        get: function () {
            return this._grade;
        },
        set: function (grade) {
            this._grade = grade;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Person));
var p = new Person('Toto');
console.log(p.name);
var s = new Student('Titi', 3);
s.upgrade();
console.log(s.grade);
