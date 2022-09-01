class Person{
    constructor(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

class Employee{
    doWork(){
        return "complete!"
    }
}

export default Employee

//export class 
export class Person{
    constructor(name){
        this._name = name
    }
    getName(){
        return this._name
    }
}

//multiple export
/*export class Employee extend Person{
    doWork(){
        return "complete!"
    }
}*/