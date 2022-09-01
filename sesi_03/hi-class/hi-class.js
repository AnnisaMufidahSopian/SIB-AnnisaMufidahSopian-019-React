//mendefinisikan class
class Employee{
    doWork(){
        return "complete!";
    }
}

//buat instance dari class, dan bisa juga memanggil method yang ada
let scott = new Employee();
console.log(scott.doWork());

//constructor
class Employee2{
    constructor(name){
        this.name = name;
    }
    doWork(){
        return "complete!";
    }
    getName(){
        return this.name;
    }
}

let scott2 = new Employee2("Scott Moss");
console.log(scott2.getName());

//generalisasi class employee menjadi class person, kemudian melakukan inheritance
class Person{
    constructor(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

class Employee3 extends Person{ //employee is a person
    constructor(name, title){
        super(name); //panggil name dari person
        this._title = title;
    }
    getTitle(){
        return this._name + " is" + " " + this._title;
    }
}

let annisa = new Employee3("Annisa Mufidah Sopian", "Student");
console.log("Employee 3 = " + annisa.getTitle()); //assign class employee3 yg ada parameter name dan title
console.log("Employee 3 = " +annisa.getName()); //ambil dari class person

//class dengan method khusus di dalam kelas itu sendiri (method do work hanya didefinisikan di Employee 4)
class Employee4 extends Person{
    doWork(){
        return this._name + " is working";
    }
    
}

let icha = new Employee4("Icha Annisa");
console.log(icha.getName());
console.log(icha.doWork());

//objek dari class person tidak bisa menggunakan method do work (akan menimbulkan error)
let annisaM = new Person("Annisa Mufidah");
//console.log(annisaM.doWork()); //error

//keyword super
class Employee5 extends Person{
    constructor(name, title){
        super(name);
        this._title = title;
    }
    getTitle(){
        return this._name + " is" + " " + this._title;
    }
}

let contoh = new Employee5 ("Annisa", "Studying");
console.log("class Employee5 = " + contoh.getTitle());

