# (20) GraphQL - Basic

## Resume

Point yang dipelajari adalah:

1. GraphQL
2. Hasura dan Heroku
3. Apollo

### GraphQL

#### Apa itu GraphQL

**GraphQL** adalah bahasa _query_ untuk _API_ dan _server-side runtime_ untuk mengeksekusi _query_ dengan menggunakan tipe sistem yang ingin ditetapkan pada data. _GraphQL_ dapat meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan _GraphQL_ dapat menggunakan hanya satu _endpoint_ saja yaitu `/graphQL` untuk setiap _request_ yang diperlukan.

#### Fitur Utama Pada GraphQL

Untuk dapat melakukan _GraphQL_ harus setup untuk server dengan menggunakan _Hasura, Apollo Server,_ atau lainnya. Selanjutnya, dapat menggunakan _GraphQL_ pada _client_ dapat menggunakan _Pirsma, Apollo Client, Postman,_ dan lainnya. Terdapat tiga fitur utama di _GraphQL client_ yaitu:

1. _Query_\
   _Query_ digunakan untuk mendapatkan atau _**get**_ data berdasarkan _query_ tertentu yang didefinisikan.
2. _Mutation_\
   _Mutation_ digunakan untuk melakukan **_insert, update,_** dan **_delete_** data.
3. _Subscription_\
   _Subscription_ digunakan untuk mendapatkan data dengan **tanggal terbaru secara _realtime_ atau berdasarkan _event_**.

#### Dasar Query

Dengan _GraphQL_ bisa mendapatkan data yang dibutuhkan yaitu dengan menentukan bidang apa yang ingin didapatkan dan _GraphQL_ akan memberikan data berdasarkan apa yang didefinisikan.

#### Query – Beberapa sumber atau koleksi data yang terkait

Dengan _GraphQL_ juga dapat menggunakan _query_ untuk mendapatkan data dari beberapa koleksi yang terkait.

#### Query – Beberapa sumber atau koleksi data yang tidak terkait

Dengan _GraphQL_ juga dapat menggunakan _query_ untuk mendapatkan data dari beberapa koleksi yang tidak terkait untuk meminimalkan request jaringan.

#### Query – Fragment

_**GraphQL fragment**_ adalah bagian dari logika yang dapat dibagi antara beberapa _query_ dan _mutation_. _Fragment_ dapat digunakan untuk menyederhanakan _query_ atau _mutation_.

#### Mutation

_**Mutation**_ adalah fungsi untuk melakukan _insert, update,_ dan _delete_ data. Dalam melakukannya perlu mendefinisikan operasi yang ingin dilakukan berdasarkan operasi yang tersedia pada _server GraphQL_. Kemudian, menentukan data apa yang ingin dikembalikan.

#### Subscription

_**Subscription**_ adalah fitur _GraphQL_ yang memungkinkan _server_ untuk mengirim data ke _client_ saat _event_ tertentu yang terjadi. _Subscription_ biasanya di implementasikan dengan _WebSockets_. Dalam setup nya, _server_ mempertahankan koneksi yang stabil ke _client subscription_ nya. Ketika data diubah, maka _client_ akan mendapatkan data yang diperbarui secara langsung atau _realtime_.

### Hasura dan Heroku

#### Apa itu Hasura

_**Hasura**_ adalah layanan yang menyediakan _GraphQL_ dan _Rest API_ yang dikelola penuh pada _cloud hasura_ atau dihosting sendiri.

#### Apa itu Heroku

_**Heroku**_ adalah _platform cloud_ sebagai layanan yang mendukung beberapa bahasa pemrograman. _Heroku_ juga menyediakan _database Postgree_ secara gratis.

### Apollo

#### Apa itu Apollo

_**Apollo client**_ adalah _state management library_ komprehensif untuk _Javascript_ yang memungkinkan mengelola data lokal dan jarak jauh dengan _GraphQL_. _Apollo client_ digunakan untuk _fetch, cache,_ dan _modify_ data aplikasi, sambil memperbarui UI secara otomatis. _Apollo client_ juga dapat digunakan untuk operasi _GraphQL_ seperti _query, mutation,_ dan _subscription_.

#### Setup Instalasi Apollo Client pada React

Untuk menginstall _GraphQL_ dan _apollo client_ dapat menggunakan perintah `npm install @apollo/client graphql`.

## Task

### 1. Membuat database, tabel, melakukan query dan mutation di Hasura

Pada tugas ini yaitu:

#### 1. Masuk ke Hasura dan membuat sebuah database bernama kampus_merdeka.

#### 2. Membuat tabel anggota yang berisikan id (primary key dan auto increment) dan nama.

#### 3. Membuat tabel keterangan yang berisikan id (primary key dan auto increment), id_anggota, pelajaran, nilai, dan status (boolean).

#### Memasukkan 3 buah data pada tabel anggota seperti di bawah ini:

| id  | nama  |
| --- | ----- |
| 1   | Budi  |
| 2   | Sita  |
| 3   | Angga |

Berikut untuk tampilan dari tabel anggota yang sudah saya buat:

![tabel-anggota](./screenshots/01_Tabel%20Anggota.png)

#### Memasukkan data pada tabel keterangan seperti di bawah ini:

| id  | id_anggota | pelajaran        | nilai | status |
| --- | ---------- | ---------------- | ----- | ------ |
| 1   | 1          | Sistem informasi | 85    | true   |
| 2   | 1          | React            | 65    | false  |
| 3   | 2          | Sistem informasi | 90    | true   |
| 4   | 2          | React            | 50    | false  |

Berikut untuk tampilan dari tabel keterangan yang sudah saya buat:

![tabel-keterangan](./screenshots/02_Tabel%20Keterangan.png)

#### Melakukan query untuk memanggil hanya siswa yang memiliki status true

Berikut untuk _source code_ dari query untuk memanggil hanya siswa yang memiliki status true:

[source-code](./praktikum/getStatusTrue.json)

Berikut untuk tampilan dari query untuk memanggil hanya siswa yang memiliki status true:

![query-get-status-true](./screenshots/03_Query%20Get%20Status%20True.png)

#### Melakukan insert pada tabel keterangan untuk anggota bernama angga dengan menggunakan mutation, sehingga memiliki data seperti di bawah ini:

| id  | id_anggota | pelajaran        | nilai | status |
| --- | ---------- | ---------------- | ----- | ------ |
| 5   | 3          | Sistem informasi | 90    | true   |
| 6   | 3          | React            | 55    | false  |

Berikut untuk _source code_ dari mutation untuk insert pada tabel keterangan dengan anggota bernama angga:

[source-code](./praktikum/insertData.json)

Berikut untuk tampilan dari mutation untuk insert pada tabel keterangan dengan anggota bernama angga:

![mutation-insert-data-1](<./screenshots/04_Mutation%20Untuk%20Insert%20Keterangan%20Kepada%20Angga%20(Pelajaran%20Sistem%20informasi).png>)

![mutation-insert-data-2](<./screenshots/05_Mutation%20Untuk%20Insert%20Keterangan%20Kepada%20Angga%20(Pelajaran%20React).png>)

Berikut untuk tampilan dari tabel keterangan setelah insert data baru:

![tabel-keterangan-baru](./screenshots/06_Tabel%20Keterangan%20Setelah%20Insert%20Data%20Baru.png)

#### Melakukan update terhadap data yang memiliki nilai false ke true menggunakan mutation:

| id  | id_anggota | pelajaran        | nilai | status |
| --- | ---------- | ---------------- | ----- | ------ |
| 5   | 3          | Sistem informasi | 90    | true   |
| 6   | 3          | React            | 55    | false  |

Berikut untuk _source code_ dari mutation untuk melakukan update terhadap data yang memiliki nilai false ke true:

[source-code](./praktikum/updateStatus.json)

Berikut untuk tampilan dari mutation untuk melakukan update terhadap data yang memiliki nilai false ke true:

![mutation-update-data-1](<./screenshots/07_Update%20Yang%20Memiliki%20Nilai%20False%20ke%20True%20(1).png>)

![mutation-update-data-2](<./screenshots/08_Update%20Yang%20Memiliki%20Nilai%20False%20ke%20True%20(2).png>)

![mutation-update-data-3](<./screenshots/09_Update%20Yang%20Memiliki%20Nilai%20False%20ke%20True%20(3).png>)

Berikut untuk tampilan dari tabel keterangan setelah dilakukan update:

![tabel-keterangan-setelah-diupdate](./screenshots/10_Tabel%20Keterangan%20Setelah%20Diupdate.png)

#### Untuk soal lebih lengkap dari praktikum materi GraphQL - Basic adalah sebagai berikut:

[Soal Praktikum Materi GrapQL - Basic](https://docs.google.com/document/d/1JFNrbzTj03DPHLANU_SXRf6eg5ENRC8g9V37WRlW9Tw/edit?usp=sharing)
