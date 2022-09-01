Sesi 03

--Class In ES6--
>JS adalah bahasa pemrograman OOP yang bersifat prototype based

--Mendefinisikan Class--
>nama class dalam JS biasanya dimulai dengan huruf kapital.
>constuctor akan dijalankan secara otomatis saat inisialisasi 
class
>dalam constructor bisa mendeklarasikan properties yang akan digunakan dalam class dengan keyword this
>tiga pilar utama OOP :
1. encapsulation
2. polymorphism
3. inheritance
>untuk menghubungkan / mengakses method atau constructor dari class leluhur, dapat menggunakan keyword super
>constructor adalah data yang akan diolah, akses menggunakan this

--JS Modules--
>dengan ES6 memberikan solusi dengan menggunakan sintaks import dan export
>export memungkinkan semua isi dari variabel / method dapat diakses dan dimanipulasi di file lain

--Promise--
>Promise adalah sebuah objek yang menghasilkan sebuah nilai dimasa yang akan datang
>Hasil dari pormise hanya ada dua
1. resolve (disertakan dgn nilai / value nya)
2. reject (untuk kasus error dan berbagai kesalahan)

>reject adalah case gagalnya proses dalam promise 
>resolve adalah case ketika promise terpenuhi

>method .then() untuk resolve
>method .catch() untuk rejection

>promise hanya bisa dijalankan dalam method / fungsi yang sudah mendukung Promise, misalnya fungsi fetch()

--new promise--
>jika sebuah fungsi belum mendukung promise, maka fungsi tersebut harus dibungkus dengan new Promise


--IIFE (Immediatelly-invoked function expression)--
1. function ()
Penggunaan tanda kurung
function doWork() 
doWork()

2. Penggunaan kurung kurawal {}
let kendaraan = {nama : "mobil", warna : "merah"}

3. Penggunaan Kurung Siku []
let arr = ["mobil", "merah"]

4. Callback Function (())
tweets.forEach((result) => console.log(result))

