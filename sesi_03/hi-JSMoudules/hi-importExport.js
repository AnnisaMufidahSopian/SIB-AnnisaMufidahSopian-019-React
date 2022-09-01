//import dari file lain
/*import Employee from "./hi-JSModules";

let alin = new Employee();

console.log(alin.doWork());*/

//multiple import
import { Person, Employee } from "./hi-JSModules";
const mark = new Employee("Mark Cubus")
mark.doWork();