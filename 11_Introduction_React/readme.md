# (11) Introduction React

## Resume

Point yang dipelajari adalah:

1. Apa itu React?
2. Apa itu VDOM?
3. Set Up Development

### Apa itu React?

#### Tentang React

_**React**_ adalah _library javascript_ yang berguna untuk membuat _UI_ yang interaktif dan cepat pada _web_ maupun _mobile_. _React_ merupakan _open source_ yang di _maintain_ oleh _Facebook_ dan pada arsitektur _MVC_ nya, _ReactJS_ hanya akan mengambil peran pada layar _view_ saja. _React_ adalah _**library**_ bukan _**framework**_ artinya _library_ diatur oleh _code_, sedangkan _framework code_ nya lah yang mengikuti.

#### Alasan menggunakan React

1. **Deklaratif**\
   Deklaratif adalah salah satu pendekatakan ketika melakukan _coding_ yang berfokus pada apa yang ingin dicapai _(What)_.
2. **Berbasis komponen**\
   Artinya ketika membuat sebuah aplikasi yang kompleks, aplikasi tersebut dapat di bagi menjadi bagian-bagian yang lebih kecil atau bisa disebut komponen. Pada setiap komponen ini mempunyai tugas spesifik masing-masing dan menganut _single-responsibility principle_.
3. **Belajar sekali, tulis dimana saja**\
   Artinya ketika sudah memahami dalam membuat web menggunakan _react_, juga bisa membuat aplikasi untuk _Android_ dan _IOS_ menggunakan _React Native_ yang konsepnya sangat mirip dengan _React_.
4. **Sudah teruji**\
   React sudah digunakan pada aplikasi di perusahaan besar seperti _Facebook, Netflix, Instagram, Traveloka,_ dan lainnya.
5. **Teknologi yang populer**\
   Artinya ketika menemukan sebuah kesulitan dapat mencari solusi dengan mudah karena mempunyai komunitas yang lebih besar dan ketika mencari pekerjaan akan lebih banyak dan mempermudah.

### Apa itu VDOM?

#### Alasan perlu VDOM

Kebutuhan pada _Virtual DOM_ didasarkan pada fakta jika manipulasi _DOM_ adalah kunci dari web yang modern dan interaktif, tetapi pada penggunaannya manipulasi _DOM_ menimbulkan beberapa masalah yaitu:

1. Manipulasi _DOM_ secara manual dapat membuat code berantakan
2. Sulit untuk mengingat _DOM_ state sebelumnya
3. Jauh lebih lambat darupada operasi _Javascript_ pada umumnya

#### Tentang VDOM

_**Virtual DOM**_ adalah representasi dari _UI_ berbentuk _Javascript Object_ yang disimpan pada memori. Pada _ReactJS_ penyimpanan dan sinkronisasi _Virtual DOM_ terhadap _DOM_ dilakukan oleh _library ReactDOM_, jadi tinggal menggunakan _ReactDOM_ yang merupakan cara deklaratif untuk memanfaatkan _Virtual DOM_ yang ada pada _ReactJS_.

### Set Up Development

#### Tools yang diperlukan

1. **Browser**\
   Dapat menggunakan _Google Chrome_.
2. **Text Editor atau IDE**\
   Untuk _text editor_ yang digunakan dapat memakai _Visual Studi Code_.
3. **Command Line Interface**\
   Untuk pengguna _Linux_ atau _MacOS_ dapat menggunakan _terminal_, sedangkan untuk pengguna _Windows_ dapat menggunakan _CMD_ atau _Powershell_. Beberapa _command_ yang sering digunakan yaitu:

| Command | Kegunaan                                                           |
| ------- | ------------------------------------------------------------------ |
| `ls`    | Menampilkan list file atau folder pada direktori saat ini          |
| `mkdir` | Membuat sebuah direktori baru                                      |
| `cd`    | Berpindah dari satu direktori ke direktori yang lain               |
| `mv`    | Memindahkan folder dan mengganti nama dari sebuah file atau folder |
| `rm`    | Menghapus file atau folder                                         |

#### Membuat aplikasi React menggunakan create-react-app (CRA)

_Syntax_ atau _command_ yang digunakan untuk membuat aplikasi _ReactJS_ adalah `npx crete-react-app [nama_project]`.

## Task

Untuk resource pada soal praktikum ini adalah sebagai berikut:

[resources](https://drive.google.com/drive/folders/1Nw2lg57SE3sKkhD5QAO9rhvfsE6ELR_X)

Untuk soal praktikumnya adalah sebagai berikut:

### 1. Membuat sebuah project react baru

Pada tugas ini yaitu membuat sebuah project react baru menggunakan command `npx crete-react-app [nama_project]`.

### 2. Membuat sebuah file baru bernama home.js

Pada tugas ini yaitu membuat sebuah file baru pada react bernama `home.js`. Kemudian, memasukkan source code yang ada pada halaman `home.html` atau `index.html` dari resources google drive yang telah disediakan ke dalam `home.js`. Lalu, untuk tampilannya akan mirip dengan halaman `home.html` dan juga memasukkan css serta assets yang diperlukan.

Berikut adalah _source code_ dari tampilan _**home**_:

[source-code](https://github.com/Bimahayunugraha/react_bima-hayu-nugraha/tree/11_Introduction_React/11_Introduction_React/praktikum)

Berikut adalah hasil _output_ dari tampilan _**home**_:

![home](./screenshots/home.png)
