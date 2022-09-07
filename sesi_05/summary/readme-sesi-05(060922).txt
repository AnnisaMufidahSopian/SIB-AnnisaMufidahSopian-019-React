Sesi05(060922)

--Aliran Data di React--
>Aliran data di react bersifat satu arah (view > action > store > view)
>cara interaksi antar komponen : state dan props
-state untuk menyimpan kondisi komponen saat ini
-props digunakan untuk mengirim informasi ke komponen lain

--State--
>State adalah seluruh informasi dari sebuah aplikasi yang dibutuhkan pada satu waktu 
>Aplikasi web modern biasanya bersifat data-driven
>React digunakan untuk menangani aliran data yang bersifat dinamis

--Props--
>menerima data yang dikirimkan dari komponen lain
>data bisa berupa informasi statis atau state dari komponen lain

--PropTypes--
>Memungkinkan untuk melakukan validasi terhadap props yang diharapkan

--Atomic Design--
>Dipopulerkan oleh Brad Frost
>Pendekatan design yang memecah elemen aplikasi web menjadi bagian-bagian modular yang paling kecil
>Elemen dibagi menjadi beberapa level / hirarki, yaitu :
-atom
-molekul
-organism
-template
-pages
>Tujuan atomic design : untuk mereduksi waktu set-up dan meningkatkan konsistensi antar komponen dan tampilan
>Sistem atomic design menggunakan pattern library

--Pros and Cons--
>Pros pattern library : lebih kolaboratif dan menjamin reusability dan maintanability untuk jangka panjang
>Cons pattern library : membutuhkan waktu lebih panjang compare to design pages biasa

>Pros Atomic Design : 
-kemampuan untuk pindah dari konsep yang abstrak kepada hal yang konkrit
-ada pemisahan yang jelas antara struktur sebuah website dengan konten
>Cons


