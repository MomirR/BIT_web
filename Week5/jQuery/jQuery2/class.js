function Student(index, name, year) {
    this.name = name;
    this.id = index;
    this.yearOfStudy = year;

    this.getInfo = function () {
        return (
            "\nIndex: " + this.id
            + "\nName: " + this.name
            + "\nCurrently on: " + this.yearOfStudy + "year\n"
        );
    }
}




function Classrom(name) {
    this.name = name;
    this.students = [];

    this.addStudent = function (student) {
        this.students.push(student);
    }

    this.getStudentsInfo = function () {
        var list = "";
        for (var i = 0; i < this.students.length; i++) {
            list += this.students[i].getInfo() + "\n";
        }
        return list;
    }

}


var pera = new Student(1, "Pera", 3);
console.log(pera);

var mika = new Student(2, "Mika", 3);
console.log(mika);


var web = new Classrom("Web");

// console.log(web.students);


web.addStudent(pera);
web.addStudent(mika);

// console.log(web.students);

var studentsInfo = web.getStudentsInfo();
console.log(web.getStudentsInfo());

