# (21) Relational Database

## Resume

Point yang dipelajari adalah:

1. Relasi Database dan Entity Relasi Diagram
2. RDBMS dan DDL
3. SQl Stament

### Relasi Database dan Entity Relasi Diagram

#### Relasi Database

_**Database**_ adalah sekumpulan data yang terorganisir. Untuk _**Relationship Database**_ merupakan sebuah hubungan _entity_ dalam _database_. Dalam _database_ memiliki tiga macam _relationship_ yaitu:

1. Relasi _One to One_\
   **Relasi _One to One_** adalah satu _record_ di _database_ yang berhubungan dengan satu _record_ di tabel lainnya.
2. Relasi _One to Many_\
   **Relasi _One to Many_** adalah satu _record_ dalam tabel yang berhubungan dengan banyak _record_ di tabel lainnya.
3. Relasi _Many to Many_\
   **Relasi _Many to Many_** adalah relasi satu atau lebih baris data di tabel dapat berhubungan dengan satu atau lebih baris data di tabel lainnya.

#### Entity Relasi Database

**Entity relasi diagram** adalah diagram yang digunakan untuk mendesain database sebelum mengimplementasikannya.

### RDBMS dan DDL

#### Relational Database Management Systems (RDBMS)

Software yang menggunakan _**Relational Database Model**_ sebagai dasarnya seperti _MySQL_. Pada _RDBMS_ menggunakan _SQL (Structured Query Language)_ sebagai bahasa pemrograman khusus yang digunakan untuk memanajemen data.

Jenis Perintah _SQL_

1. _Data Definition Language (DDL)_
2. _Data Manipulation Language (DML)_
3. _Data Control Language (DCL)_

Beberapa statement dalam perintah SQL:
| DDL Statement | Create Table with Is Schema | Modify Table Schema |
| ---- | --- | ---- |
| CREATE DATABASE database_name | CREATE TABLE table_name { column1 data_type PRIMARY_KEY, column data_type, PRIMARY KEY (one or more columns) }; | ALTER TABLE table_name |
| USE database_name | |ADD COLUMN column_name data_type; |
| CREATE TABLE ... | | |
| DROP TABLE ... | | |
| RENAME TABLE ... | | |

Tipe data MySQL

1. Num
2. String
3. Date

#### Data Manipulation Language (DML)

_**Data Manipulation Language (DML)**_ adalah perintah yang digunakan untuk memanipulasi data dalam tabel dari suatu _database_.

### SQl Stament

#### Statement Operation dan DDL Statement

| Statement Operation | DML Statement  |
| ------------------- | -------------- |
| INSERT              | LIKE / BETWEEN |
| SELECT              | AND / OR       |
| UPDATE              | ORDER BY       |
| DELETE              | LIMIT          |

#### Statement Lainnya

##### Join

_**Join**_ adalah sebuah klausa untuk mengkombinasikan record dan dua atau lebih tabel. Dalam _join_ memiliki standar _SQL ANSI_ yaitu:

1. **INNER JOIN**\
   _Inner Join_ akan mengembalikan baris-baris dari dua tabel atau lebih yang memenuhi syarat.
2. **LEFT JOIN**\
   _Left Join_ akan mengembalikan seluruh baris dari tabel disebelah kiri yang dikenal dengan kondisi _QN_ dan hanya baris dari tabel disebelah kanan yang memenuhi kondisi _join_.
3. **RIGHT JOIN**\
   _Right Join_ akan mengembalikan semua baris dari tabel sebelah kanan yang dikenal kondisi _QN_ dengan data dari tabel disebelah kiri yang memenuhi kondisi _join_. Teknik ini merupakan kebalikan dari _Left JoiN_.

##### AGGREGATE

Dalam _aggregrate_ memiliki fungsi aggregasi yaitu fungsi dimana nilai dikelompokkan bersama untuk membentuk nilai ringkasan tunggal. Berikut adalah beberapa fungsi agregasi apda SQL:
| Fungsi| Kegunaan|
| ---- | --- |
|MIN| Nilai dikelompokkan bersama untuk membentuk nilai ringkasan tunggal.
|MAX |Digunakan untuk mendapatkan nilai maksimum atau nilai terbesar dari sebuah data record di tabel.
|SUM |Digunakan untuk mendapatkan jumlah total nilai dari sebuah data atau record di tabel.
|AVG |Digunakan untuk mencari nilai rata-rata atau average dari sebuah data atau record di tabel.
|COUNT |Digunakan untuk mencari jumlah dari sebuah data atau record di tabel.
|HAVING |Digunakan untuk menyeleksi data berdasarkan kriteria tertentu, dimana kriteria berupa fungsi aggregat.

##### SUQQUERY

_**Subquery**_ atau _**Inner Query**_ atau _**Nested Query**_ adalah _query_ di dalam _query SQL_ lain. Sebuah _Subquery_ digunakan untuk mengembalikan data yang akan digunakan dalam _query_ utama sebagai syarat untuk lebih membatasi data yang akan diambil. _Subquery_ dapat digunakan dengan _SELECT, INSERT, UPDATE_, dan _DELETE_ statement bersama dengan operator seperti _=, <, >, >=, <=, IN, BETWEEN,_ dan lainnya. Peraturan yang harus ditaati pada _Subquery_ yaitu:

1. Harus tertutup dalam tanda kurung ().
2. Sebuah _subquery_ hanya dapat memiliki satu kolom pada klausa _SELECT_, kecuali beberapa kolom yang di _query_ utama pada _Subquery_ untuk membandingkan kolom yang dipilih.
3. Subqueries yang kembali lebih dari satu baris hanya dapat digunakan dengan beberapa _value_ operator, seperti operator IN.
4. Daftar _SELECT_ tidak bisa menyertakan referensi ke nilai-nilai yang mengevaluasi ke _BLOB, ARRAY, CLOB,_ atau _NCLOB_.
5. Sebuah _Subquery_ tidak dapat segera tertutup dalam fungsi _set_.

##### FUNCTION

_**Function**_ adalah sebuah kumpulan _statement_ yang akan mengembalikan sebuah nilai balik pada pemanggilnya

##### UNION

Hal yang perlu diperhatikan dari union adalah jumlah field yang dikeluarkan atau dipanggil harus sama.

## Task

### Membuat relation database dengan Hasura

Pada tugas ini yaitu membuat relation database dengan Hasura pada database kampus_merdeka yang sebelumnya sudah dibuat. Untuk soal nya adalah sebagai berikut:

#### 1. Melakukan relasi database one to one, yang akan menghubungkan id_anggota pada tabel keterangan dengan nama pada tabel anggota

Berikut untuk _query result_ dari query untuk menampilkan hasil dari relasi one to one:

[query-result](./praktikum/queryOneToOne.json)

Berikut untuk tampilan dari _query result_ untuk relasi one to one:

![query-result](./screenshots/01_Query%20One%20to%20One.png)

Berikut untuk tampilan dari relasi one to one pada tabel keterangan:

![relasi-one-to-one](./screenshots/03_Relasi%20One%20To%20One%20Pada%20Tabel%20Keterangan.png)

#### 2. Melakukan relasi database one to many, yang akan menghubungkan id pada tabel anggota dengan pelajaran pada tabel keterangan

Berikut untuk _query result_ dari query untuk menampilkan hasil dari relasi one to many:

[query-result](./praktikum/queryNneToMany.json)

Berikut untuk tampilan dari _query result_ untuk relasi one to many:

![query-result](./screenshots/02_Query%20One%20to%20Many.png)

Berikut untuk tampilan dari relasi one to many pada tabel anggota:

![relasi-one-to-many](./screenshots/04_Relasi%20One%20To%20Many%20Pada%20Tabel%20Anggota.png)

#### Untuk soal lebih lengkap dari praktikum materi Relational Database adalah sebagai berikut:

[Soal Praktikum Materi Relational Database](https://docs.google.com/document/d/10l_iKfLUA0VZo8RpTfgvIN53K18XiDM7FrWrmztv5fI/edit?usp=sharing)
