# (19) Deployment

## Resume

Point yang dipelajari adalah:

1. Cara Build React App
2. Deployment
3. Deploy Project React App Menggunakan Surge dan Netlify

### Cara Build React App

#### Alasan memerlukan build React App

Secara default, _React_ mengandung banyak pesan peringatan yang dapat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat _React_ menjadi lebih besar dan lambat, maka harus menggunakan versi _production_ ketika melakukan deploy aplikasi. Tujuan melakukan _build_ ini adalah agar aplikasi menjadi versi _production_, sehingga performanya lebih ringan dan cepat.

#### Cara melakukan Build React App

Karena _project_ dibangun menggunakan _Create React App (CRA)_, maka untuk perintah _build_ nya yaitu `npm run build`. Perintah ini akan membuat versi _production_ untuk aplikasi yang terdapat di dalam folder bernama _**build**_.

#### Run Optimized App

Untuk menjalankan aplikasi yang optimal di lokal komputer dapat menggunakan perintah _serve_. Tetapi, untuk dapat menjalankan perintah tersebut harus melakukan instalasi _serve_ terlebih dahulu dengan menggunakan perintah `npm install -g serve` dan perintah ini akan terinstall secara global pada komputer, kemudian menjalankan aplikasi dengan perintah `serve -s build`.

#### Dokumentasi lebih lengkap untuk Deployment pada React

[https://cra.link/deployment/](https://cra.link/deployment/)

### Deployment

#### Apa itu Deployment

_**Deployment**_ adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah dibuat dengan harapan aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

### Deploy Project React App Menggunakan Surge dan Netlify

#### Deploy Project React App Menggunakan Surge

##### Apa itu Surge

_**Surge**_ adalah **layanan penerbit _website static_ (_static web publishing_) gratis untuk _Front-End Developers_**. _Website static_ yang menggunakan _surge_ akan memiliki subdomain `*.surge.sh`. _Surge_ dapat menerima file _HTML, CSS,_ dan _JS_.

##### Instalasi Surge

Untuk menginstall _surge_ dapat menggunakan perintah `npm install –global surge`. Perintah ini akan membuat _surge_ terinstall secara global pada komputer.

##### Deploy dengan Surge

Untuk melakukan _deploy_ dengan _surge_ dapat menjalankan perintah `surge` pada terminal.

##### Teardown Surge

_Teardown_ digunakan untuk membuat _project_ yang sudah di _deployment_ menjadi _offline_ dengan menggunakan perintah `surge teardown <nama domain>`.

#### Deploy Project React App Menggunakan Netlify

##### Apa itu Netlify

_**Netlify**_ adalah **salah satu platform penyedia layanan _build tools_ sekaligus _Continous Deployment_**. _Netlify_ memungkinkan untuk melakukan _publish website_ statis secara gratis. _Netlify_ juga sudah terintegrasi dengan _Git Host_ popular seperti _Github, Gitlab,_ dan _Bitbucket_.

##### Deploy dengan Netlify

Melakukan _install Netlify CLI_ terlebih dahulu dengan menggunakan perintah `npm install netlify-cli -g`. Perintah ini akan membuat _Netlify CLI_ terinstall secara global pada komputer. Kemudian, menjalankan perintah `netlify deploy` pada terminal untuk melakukan _deploy project React_.

## Task

### 1. Membuat project React baru dan deploy project tersebut

Pada tugas ini yaitu membuat project React baru dan mengubah source code nya. Kemudian, melakukan deploy menggunakan Surge atau Netlify dengan ketentuan link format deploy yaitu “taskdeploy-namakalian”.

Untuk soal lebih lengkapnya dapat dilihat pada link berikut:

[Soal praktikum deployment](https://docs.google.com/document/d/1aSMZRdwOlMiwqWwzOKLSGj06jSeMyCa-TcAIjvpFTfQ/edit?usp=sharing)

#### Hasil Deploy Project React

Note : Untuk deploy project React yang dibuat saya menggunakan Netlify.

Berikut adalah _link_ dari hasil deploy react project yang sudah dibuat:

[https://taskdeploy-bimahayunugraha.netlify.app](https://taskdeploy-bimahayunugraha.netlify.app)

Berikut adalah hasil _output_ dari hasil deploy react project yang sudah dibuat:

![tampilan-website-yang-sudah-di-deploy-menggunakan-netlify](./screenshots/Tampilan%20website%20yang%20sudah%20di%20deploy%20dengan%20netlify.png)
