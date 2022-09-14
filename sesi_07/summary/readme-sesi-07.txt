--Sesi 07--

--Component Lifecycle--
>Lifcycle adalah urutan kejadian / keadaan yang terjadi secara default dan berjalan secara teratur

>Lifecycle dalam react :
1. Mounting
2. Updating
3. Unmounting

>Phase dalam react :
1. Render phase
Pure and has no side effects. May be paused, aborted or restarted by React
2. Commit phase 
Can work with DOM, run side effects, schedule updates

--Class Component Lifecycle--
1. Mounting

>constructor()
-Dipanggil saat sebuah komponen diinisialisasi
-Definisikan state awal sebuah komponen dan melakukan deklarasi variabel dan binding class method

>render()
-render harus dimiliki oleh setiap class dan render harus me return sebuah komponen. class method harus bersifat pure function dan tidak boleh ada perubahan state di render.
 
>componentDidMount()
-dipanggil ketika sebuah komponen selesai diletakkan di DOM sebuah browser
-merupakan method yang tepat untuk melakukan asyncronus request untuk mengambil data dari API. Hasil data yang didapat akan disimpan kedalam internal state dan akan men-trigger render()

2. Updating

>shouldComponentUpdate(nextProps, nextState)
-default behavior dari React adalah selalu re-render setiap ada perubahan state / props
-function ini bisa membatasi keadaan / kejadian apa saja yang bisa men-trigger re render
-default return value dari function ini adalah true

>componentDidUpdate(prevProps, prevState)
-dipanggil tepat setelah render dipanggil
-bisa digunakan untuk operaso DOM / request async untuk data berikutnya disini (misal : prefetch)

3. Unmounting

>componentWillUnmount()
-dipanggil sebelum menghapus komponen dari DOM.
-bisa bersih-bersih di class method ini