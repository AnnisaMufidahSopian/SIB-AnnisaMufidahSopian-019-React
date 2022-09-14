--Sesi 06--

--Functional Component--
>Functional Component stateless : fungsi yang tidak menyimpan state
>Hanya dapat menerima props
>dapat digunakan untuk menampilkan data tanpa butuh banyak logika

--Class Component--
>mendefinisikan class dengan sintaks yang meng-extend React.Component
>dapat mengakses ke state dan seluruh life cycle komponen

--Statefull Component--
>Komponen atau app akan menyimpan informasi terkait komponen tersebut
>Komponen dapat mengubah informasi tersebut

--Stateless Component--
>Komponen tidak memiliki dan tidak bertanggungjawab terhadap state
>Hanya menampilkan data yang dikirim oleh parent component melalui props
>pada kasus tertentu, lebih dianjurkan penggunaan stateless component daripada statefull component 

--Class Component vs Function Component--
>Class component (statefull component)
>Functional component (stateless component)
>Hooks membua functional component dapat memiliki kemampuan yang sama dengan class component (bisa memiliki state dan lifecycle)
>Hooks : useState dan useEffect
>Function Component digunakan untuk mempertahankan simplicity dan clean code

--Hooks Concept--
>Hooks mengaitkan beberapa fitur yang terdapat di class component, untuk bisa digunakan di functional component
>Hooks digunakan agar state dan lifecycle bisa digunakan di functional component
>state dan lifecycle dikaitkan kedalam functional component oleh useState dan useEffect

>useState : function yang mengembalikan nilai stateful dan sebuah fungsi untuk memperbaruinya
>setState : function yang digunakan untuk memperbarui state. Function menerima sebuah nilai state yang baru dna meminta sebuah render ulang pada komponen tersebut

>menggunakan use effect bisa menyebabkan perubahan, apabila telah berubah di file lain

>useLocation untuk membaca link yg sedang ada skrg

