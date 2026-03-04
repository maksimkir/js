class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class StudentRegistry {
    constructor() {
        this.registry = new Map();
    }

    addStudent(student) {
        this.registry.set(student.id, student);
    }

    removeStudent(id) {
        this.registry.delete(id);
    }

    findStudent(id) {
        return this.registry.get(id);
    }

    displayAll() {
        console.log("Список студентів:");
        this.registry.forEach(s => console.log(`${s.id}: ${s.name}, ${s.age} років`));
    }
}