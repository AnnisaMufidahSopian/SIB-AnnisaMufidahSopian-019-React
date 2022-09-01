Sesi 02 (250822) 19.00 - 22.00

>Object sama seperti array, namun bisa mengumpulkan berbagai data dengan apapun tipe datanya.
*jika tipe data sama : array
*jika tipe data berbeda beda : object 

*urutan array menggunakan index
*urutan object menggunakan key / property

>destructing untuk melakukan ekstraksi banyak properti sekaligus dari sebuah objek, sehingga akan mengurangi jumlah baris kode

>aliasing object properties untuk mengubah penamaan jika sebuah properti memiliki penamaan yang buruk atau kurang jelas

>This keyword di javascript 
*seringkali merupakan variabel global
*this adalah global variabel dari Node.js
*jika dalam konteks objek, this digunakan untuk memanggil properties yang dimiliki object tersebut
*dalam konteks object-oriented di JS, this digunakan untuk mendeklarasikan public properties

>Arrow Function
*keuntungan menggunakan arrow function :
1. sintaks lebih singkat, implicit return, dan manajemen this yang lebih bisa diprediksi
2. Dapat me return nilai secara implisit (tidak perlu menulis keyword return dengan syarat tertentu)
3. Memudahkan dalam memahami this keyword

*Method / function bind digunakan untuk meminjam method dari objek lain agar dapat dikenali, karena dalam arrow function, scope sangat memengaruhi penggunaan this. (seperti contoh scope function person() dan function setInterval() berbeda.
*arrow function tidak usah pake bind

>Functional Programming 
*3 method yang menerapkan konsep functional programming : 
1. method map
2. method filter
3. method reduce

-Dengan Functional Programming fungsi dapat dengan mudah dikirim sebagai parameter di fungsi yang lain

>Filter
*filter menerima sebuah (hanya 1) parameter dalam bentuk fungsi dan akan mengembalikan array baru hasil dari kalkulasi array yang lama
*dengan method filter dapat memudahkan dalam proses pencarian suatu data dalam array, karena dapat menghasilkan array baru dan tidak perlu dilakukan proses looping untuk memeriksa seluruh nilai dalam array, dan tidak diperlukan operasi lain seperti push/pop ketika nilai yang diinginkan ditemkan dalam array
*filter tidak akan mengelola ke dalam array / object didalamnya lagi, jika di run di console

>Map
*Map melakukan iterasi pada array untuk menemukan suatu nilai dalam array, untuk menemukan suatu nilai yang dibutuhkan
*Map digunakan untuk menghasilkan himpunan bagian dari suatu array, misal ingin hanya mengambil nama dari suatu objek array
*elemen yang tidak sesuai tidak akan dibuang, jika mencari salah satu elemennya saja, maka akan memberikan nilai true pada index nilai yang sesuai, dan memberikan nilai false untuk nilai yang lainnya (namun seluruhnya tetap dipanggil dan ditampilkan)
*jumlah elemen array dalam map selalu tetap sama

>Reduce
*Reduce bisa digunakan untuk filter data ataupun map (memilih subset)
*Reduce bisa digunakan untuk menjumlahkan (summarize), mencari nilai rata-rata, dll
*Reduce menerima 2 parameter

>const tidak akan tampil jika belum dideklarasi (karna sebuah varaibel / function expression)

>function akan bisa tampil walau belum dideklarasi / dideklarasi duluan
-destructing function biasanya digunakan

>perbedaan console ada beberapa hal yg tidak akan tampil
>di web objek bisa semua terbaca
