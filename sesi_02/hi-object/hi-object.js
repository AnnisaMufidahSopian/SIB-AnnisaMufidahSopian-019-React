/*const user = {};
user.name = 'Annisa Mufidah';
user.handle = '@annisaMS';
user.location = 'Bandung, Indonesia';*/

//extraction
/*const name = user.name;
const handle = user.handle;
const location = user.location;
console.log(name, handle, location); //object literal notation*/

//destructing
const user = {
    name : 'Annisa Mufidah',
    handle : '@annisaMS',
    location : 'Bandung,Indonesia'
}

//extraction 
/*const { name, handle, location } = user;
console.log(name, handle, location);*/

//destructing function result
const getUser = () => {
    return{
        name : 'Annisa Mufidah',
        handle : '@annisaMS',
        location : 'Bandung,Indonesia'
    };
}

//extraction
/*const { name, handle, location } = getUser();
console.log(name, handle, location)*/

//Destructing Array
const csv = "1997, Ford, F350, Must Sell!";
const [year, make, model, description] = csv.split(",");
console.log(csv);

const user2 = {
    n : 'Annisa',
    h : '@annisMS',
    l : 'Bandung, Indonesia'
}

//extraction

const { n : name, h: handle, l : location } = user2;
console.log(name, handle, location);
console.log('hello');
