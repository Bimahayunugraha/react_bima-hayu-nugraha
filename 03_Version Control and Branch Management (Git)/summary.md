# (03) Version Control and Branch Management (Git)
## Summary

Dalam materi ini point yang dipelajari adalah:
1. Tentang Version Control System (VCS)
2. Perintah-perintah dan file yang ada di Git
3. Pengertian workflow dan cara optimalisasi workflow yang baik

### Tentang Version Control System (VCS)
VCS terdiri dari 3 versi yaitu:\
**a. Single User**\
_Single user_ dikembangkan _Unix_ untuk memanajemen sebuah yang masih bersifat localized. Versi ini masih menggunakan komputer untuk memanajemen OS yang bersifat _Unix_ dengan SCCS atau RCS dalam artian memanajemen projek yang berbasis local, jadi antara komputer satu sama lain masih belum terhubung. Tetapi sudah terlacak di local.\
**b. Centralized**\
Pada _centralized_ terdapat CVS, Perforce, Subversion, dan Microsoft Team Foundation Server. Versi ini sudah mempunyai _server_ pusat. Pada saat developer menggunakan _centralized_, kemudian servernya mati. Maka, developer tidak bisa menggunakannya lagi karena dalam pengambilan data yang dilakukan developer langsung mengambil datanya dari server pusat, sehingga jika server mati data tidak bisa diambil.\
**c. Distributed**\
Pada _distributed_ terdapat _tools_ yang banyak digunakan oleh developer dan paling efektif yaitu Git. Git dikembangkan pada tahun 2005 dan digunakan untuk mengupload file ke server, tetapi dalam mengedit file tetap dilakukan di local. Untuk dapat mengupload filenya ke server harus tersinkronisasi terlebih dahulu ke server tersebut dengan menggunakan perintah - perintah yang ada di Git.

Pada VCS terdapat _tools_ yang paling populer yaitu Git. Git merupakan salah satu _Version Control System (VCS)_ populer yang banyak digunakan oleh para developer dalam mengembangkan software secara bersama-sama. Git dapat melakukan pelacakan pada setiap perubahan dari projek dan berkolaborasi dengan developer lain. Git ini juga merupakan sistem yang terdistribusi. Dalam git terdapat _Git Repository_ yang digunakan untuk menyimpan folder project yang telah dibuat.

### Perintah-perintah yang ada di Git
Perintah-perintah yang ada di Git dapat dikategorikan sebagai berikut:
1. **Setting Configuration**
   - Perintah git init\
     Perintah ini digunakan untuk menginisialisasi git dengan membuat folder baru yang bernama .git pada projek yang ingin di upload.
   - Perintah git clone\
     Perintah ini digunakan untuk melakukan _clone_ projek dari github dengan menarik semua folder dan filenya.
   - Perintah git config\
     Perintah ini digunakan untuk mengatur konfigurasi Git ke global atau local.
2. **Saving Changes**
   - Perintah git add\
     Perintah ini digunakan untuk memindahkan file yang ingin di upload ke _staging area_.
   - Perintah git commit\
     Perintah ini digunakan untuk membuat file yang ingin di upload masuk ke dalam _git repository_ dan menuliskan pesannya.
   - Perintah git diff\
     Perintah ini digunakan untuk mengetahui perubahan yang terjadi pada file yang diubah secara detail.
   - Perintah git stash\
     Perintah ini digunakan untuk menyimpan sementara perubahan file ke dalam _stash area_.
   - Perintah git stash apply\
     Perintah ini Untuk mengembalikan perubahan yang sudah disimpan di _stash area_.
   - File .gitignore\
     File ini digunakan untuk mengeksekusi file yang dikecualikan saat upload ke github.
3. **Inspecting Repository**
   - Perintah git log\
     Perintah ini digunakan untuk melihat list perubahan yang dilakukan. 
   - Perintah git log --oneline\
     Perintah ini digunakan untuk melihat perubahan hanya dalam satu line.
   - Perintah git reset\
     Perintah ini digunakan untuk mengembalikan sebuah perubahan ke titik tertentu. Dalam perintah _git reset_ terdapat dua jenis yaitu _--soft_ dan _--hard_. _--soft_      artinya ketika ingin kembali ke suatu titik, perubahan yang dilakukan akan tetap terlacak dan ada di staging area, sedangkan _--hard_ artinya ketika ingin              kembali ke suatu titik, perubahan yang dilakukan akan hilang dati staging area.
 4. **Syncing**
    - Perintah git push\
      Perintah ini digunakan untuk mengirimkan file ke _git server_.
    - Perintah git fetch\
      Perintah ini digunakan untuk mengambil data yang ada di dalam _server_.
    - Perintah git pull\
      Perintah ini digunakan untuk menarik data, kemudian di _merge_ ke branch yang dibuat.
 5. **Braches**
    - Perintah git branch\
      Perintah ini digunakan Untuk dapat melihat list dari branch yang tersedia pada _repository_. 
    - Perintah git branch --list\
      Perintah ini digunakan untuk dapat melihat semua branch yang tersedia pada _repository_.
    - Perintah git branch <branch>\
      Perintah ini digunakan untuk membuat branch yang baru. 
    - Perintah git branch -D <branch>\
      Perintah ini digunakan untuk menghapus branch yang diinginkan.
    - Perintah git branch -a\
      Perintah ini digunakan untuk melihat list dari _remote branch_.
    - Perintah git merge\
      Perintah ini digunakan untuk menggabungkan perubahan dari branch yang dilakukan perubahan ke _branch_ yang dituju. Dalam perintah ini terdapat dua jenis yaitu _--       ff_ dan _--no-f_.
    - Perintah pull requests\
      Perintah ini dapat dilakukan secara langsung di github yang digunakan untuk melakukan kontribusi pada repository yang diinginkan.

### Pengertian workflow dan cara optimalisasi workflow yang baik
Workflow adalah alur dari penggunaan Git pada Github atau Gitlab.\
Cara optimalisasi workflow yang baik adalah dengan adanya _branch master_ yang digunakan untuk sisi _production_. Terdapat juga _branch develop_ yang digunakan untuk penggabungan dan pengembangan, pengambilan titik dari setiap feature bukan diambil dari _branch master_, tetapi diambil dari _branch develop_, misalnya _featureA_ dan _featureB_. Kemudian, dimasukkan lagi ke _branch develop_. Untuk melakukan coding tidak dilakukan di _branch develop_, tetapi di _branch featuare_. Jika dari _branch develop_ sudah pasti, selanjutnya dimasukkan ke _branch master_. 


## Tugas
### 1. Membuat 4 branch dan melakukan merge branch
Pada tugas ini, membuat 4 _branch_ yaitu _branch master_, _develop_, _featureOne_, dan _featuretwo_ serta melakukan merge untuk _branch featureOne_ dan _featureTwo_ ke _branch develop_.

Berikut adalah link repository github pengumpulan tugas praktikum git:\
[Tugas Praktikum Git](https://github.com/Bimahayunugraha/react_bima-hayu-nugraha_praktikum-git)

Screenshot dari hasil insight network:\
![screenshot](./screenshots/screenshot.png)