const animals = [
    {name : 'Fluffy', species : 'cat'},
    {name : 'carlo', species : 'dog'},
    {name : 'nemo', species : 'fish'},
    {name : 'hamilton', species : 'dog'},
    {name : 'dory', species : 'fish'},
    {name : 'ursa', species : 'cat'}
];

//dengan looping for
/*let names = [];
for(let i=0; i<animals.length;i++){
    names.push(animals[i].name);
}
*/

//dengan menggunaka method map dan menghasilkan subset dari array (mencari nama saja)
let names = animals.map((animals) => animals.name);
console.log(names);

//dengan menggunaka method map dan mencari salah satu nilai dari array (menghasilkan true / flase)
let names2 = animals.map((animals) => animals.name == 'nemo');
console.log(names2);

//bentuk lain yang dapat dihasilkan map
let names3 = animals.map((animals) => animals.name + " " + 'is a' + " " + animals.species);
console.log(names3);