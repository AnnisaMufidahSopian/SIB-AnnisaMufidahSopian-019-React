//**Array

var kode = ["React", "Php", "Ruby"];
console.log(kode);

let kode2 = ["React", "Php", "Ruby"];
console.log(kode2);

const kode3 = ["React", "Php", "Ruby"];
console.log(kode3);

/*menggabung 2 array*/
var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
var buah_buahan = ['strawberry', 'pear', 'durian'];
//fruits.push.apply(fruits, buah_buahan);
buah_buahan.push.apply(buah_buahan,fruits);
console.log(fruits);
//console.log(buah_buahan);

/*menghapus isi array berdasarkan index*/
var hapusIndex = 1;
fruits.splice(hapusIndex, 1); //index 1 yaitu melati terhapus
console.log(fruits);

/*mengosongkan array*/
fruits.splice(0, fruits.length); 
console.log(fruits);

/*array multidimensi*/
