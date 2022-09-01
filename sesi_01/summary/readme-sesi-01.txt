Kesimpulan Belajar JS Hacktiv8 Sesi 01

>Apa itu variabel?
Variabel dapat dikatakan sebuah tempat / wadah penyimpanan untuk suatu tipe data. Isi dari variabel ini dapat diubah, namun hanya dapat diisi dengan satu nilai. Penamaan variabel yang baik adalah disesuakian dengan isi data dari variabel tersebut agar tidak menimbulkan kebingungan

>Apa pentingnya variabel?
Pentingnya variabel adalah untuk dapat menampung suatu tipe data yang nantinya akan digunakan

>Mendeklarasikan Variabel
Terdapat beberapa cara untuk mendeklarasikan variabel, seperti dengan menggunakan keyword let, const, atau var. Namun dalam modern JS, var sudah jarang digunakan dan lebih sering menggunakan let / const dalam mendeklarasikan tipe data

>Mengisi variabel dengan nilai / value
Untuk variabel dapat diisi dengan tipe data number, string, ataupun boolean, sesuai dengan kebutuhannya. Mengisi variabel dengan suatu nilai juga dapat dilakukan dengan beberapa cara, dapat dideklarasikan terlebih dahulu variabelnya, baru setelah itu di-assign nilainya, dapat juga sekaligus mendeklarasikan variabel dan langsung di-assign nilainya, dan dapat pula mengisi variabel dengan meminta input dari user

>Memberi nama variabel yang baik
Penamaan variabel yang baik adalah disesuakian dengan isi data dari variabel tersebut agar tidak menimbulkan kebingungan

>Berbagai jenis tipe data
Terdapat berbagai tipe data yang dapat digunakan dalam JS. Pada sesi 01 ini dipelajari 3 macam tipe data, yaitu number, string, dan boolean, juga ada satu tipe data array yang merupakan structured data

>Tipe data number dan pengoperasiannya
Seperti namanya, tipe data number berupa angka. Pada tipe data number ini dapat dilakukan operasi aritmatika seperti penjumlahan, pengurangan, perkalian, pembagian, dan lain lain.

>Tipe data string dan cara memanipulasinya
String merupakan tipe data yang berupa huruf, kumpulan huruf, ataupun simbol. Setelah deklarasi variabel, maka diperlukan tanda kutip 2 (") atau tanda kutip 1 (') untuk menandakan bahwa data tersebut memiliki tipe data string. Untuk manipulasi string, dikenal istilah concatination (concat) yang digunakan untuk menggabungkan beberapa string sekaligus

>Tipe data boolean
Tipe data boolean adalah tipe data yang hanya memiliki 2 nilai yaitu true dan false. Tipe data ini digunakan untuk memberi informasi terkait sutau kondisi tertentu, yang dapat dinyatakan dengan nilai benar / salah atau ya / tidak

>Bagaimana mengetahui tipe data dari sebuah variable
Untuk mengetahui tipe data dari suatu variabel dapat menggunakan sintaks (typeof namaVar, contoh : typeof isRaining)

>Apa itu array
Array merupakan suatu tipe data yang berupa data structured / struktur data, karena dalam array ini dapat berisi beberapa nilai sekaligus yang saling berdempetan / bersisian. Untuk setiap nilai yang terdapat dalam suatu array, diurutkan dari sebelah kiri sebagai index ke-0, ke sebelah kanan sampai dengan index terakhir. Array juga dapat dimanipulasi, seperti penambahan nilai baru (push), penghapusan nilai berdasarkan urutan (pop), penghapusan nilai berdasarkan index (splice), penggabungan 2 array(push.apply), dan pengosongan array(splice).
-3 metode operasional array pada JS yg sangat penting 
*merge 2 array (menggunakan push.apply) 
*menghapus elemen array sesuai indeks dapat menggunakan splice {namaArray.splice(namaVar, indeks yg ingin dihapus)} 
*mengosongkan array dapat menggunakan splice {namaArray.splice(0, namaArray.length)}

>Apa itu jenis Array
Terdapat 2 jenis array, yaitu array 1 dimensi, dan array multidimensi (ada array di dalam array)

>Mengisi Array
Untuk mengisi array dapat menggunakan perintah push (namaArr.push(nilaiBaru), dan elemen array yang baru pun akan masuk sebagai indeks baru / tambahan dari niali yang sudah ada dalam array