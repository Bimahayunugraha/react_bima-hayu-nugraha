# Problem 1 - Analysis

## Soal dan Jawaban

### 1. Berapa banyak kekurangan dalam penulisan kode tersebut?

#### Jawab

5 kekurangan

### 2. Bagian mana saja terjadi kekurangan tersebut?

#### Jawab:

1. Bagian dalam deklarasi attribute var id; var usernames; var password; pada class user.
2. Bagian dalam penulisan nama `class user` dan `class userservice`.
3. Bagian dalam penulisan method `getallusers` dan `getuserbyid` pada class userservice.
4. Bagian pada `class userservice`.
5. Bagian `user [] users = [];`.

### 3. Tuliskan alasan dari tiap kekurangan tersebut!

1. Dalam deklarasi attribute pada class user harus menggunakan `constructor` dan menggunakan keyword `this` sebelum nama variabel. Jika tidak menggunakan `constructor` dapat dilakukan deklarasi attributenya dengan menghilangkan keyword `var`.
2. Dalam penamaan class sebaiknya menggunakan style PascalCase, seperti `class User` atau `class UserService`
3. Untuk penulisan nama method harus menggunakan style camelCase, seperti `getAllUsers` atau `getUserById`.
4. Untuk mengakses attribute dari class parent (class user) ke class child (class userservice) dapat menggunakan `extends`
5. Untuk dapat mendapatkan attribute pada class parent (class user) yang sudah di deklarasikan sebelumnya dapat menggunakan `super`, contohnya `super(<nama attribute>)` dan dalam deklarasinya dapat menggunakan `constructor`, contohnya `constructor(<nama attribute>) {super(<nama attribute>) this.users = []}`
