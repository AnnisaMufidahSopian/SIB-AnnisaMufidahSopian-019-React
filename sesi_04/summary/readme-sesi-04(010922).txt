Sesi O4 (010922)

--Intro to React--

>React berporos pada komponen yang membentuk halaman web (menggabung antar komponen react)

>Pengembangan aplikasi mobile (React native), aplikasi VR (React VR), aplikasi CLI(React Blessed)

--Komponen Utama React--
>React berbasis komponen
>Prinsip react adalah menyusun komponen
>Pola pikir komponen menjadi sangat penting, karena penggunaan komponen dapat dilakukan berulang ulang
>Komponen mudah di test dengan unit test

--Aliran data satu arah--
>Dengan aliran data satu arah, perubahan data menjadi lebih mudah dimengerti dan lebih mudah diprediksi

>Aliran data dalam react : Store - View - Action

>Dalam react :
-Data disimpan dalam wadah yang disebut store / state
-Saat ada perubahan data dalam store, bagian view tidak akan bisa mengubah data

>Ketika ada perubahan : 
-view harus menghubungi action untuk memberitahu bahwa ada sebuah action yang di trigger oleh pengguna
-action harus menghubungi store untuk mengubah data sesuai actionnya
-store mengubah data sesuai action
-store mengubah view sesuai dengan perubahan datanya / actionnya
-jadi alurnya view -> action -> store -> view


--Virtual DOM--
>ketika ada perubahan data, seluruh komponen react akan dirender ulang
>yang dirender ulang dalam react adalah virtual DOM bukan DOM nya
>virtual DOM adalah struktur data yang menyimpan informasi lengkap (blueprint) tentang DOM
>perubahan dalam react akan dilakukan pada virtual DOM terlebih dahulu, yang nantinya hasil perubahan akan dibandingkan dengan DOM nya
>perubahan hanya akan dilakukan pada DOM yang mengalami perubahan, tidak merubah / menelusuri seluruh pohon DOM nya
>peubahan virtual DOM lebih cepat 

--JSX--
>JSX merupakan javascript dengan tambahan fungsi
>Dengan JSX dapat menulis kode yang sangat mirip dengan HTML /XML

--Command Create-React-App--
>Create-React-App adalah kumpulan library yang memudahkan dalam membuat aplikasi React

--Alur kerja Babel--
>Babel untuk translasi dari JSX

--Keamanan--
>Bisa dalam bentuk sisi server (autentikasi aset dari sisi server, SSL, firewall)

--Web--
>FrontEnd BackEnd
>Microservice
>Salah satu celah keamanan adalah dari JSON
>Untuk upload file di form jangan buat nerima any file (harus dispesifikasi jenis file nya misal jpg / png, pdf / word)


>Frontend mengelola asset, validation, upploader