# (22) GraphQL - Query and Apollo Client

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

#### Query

##### Query dengan Apollo Client

Contoh cara melakukan _query_ dengan _Apollo Client_ sebagai berikut:

```js
import { gql, useQuery } from "@apollo/client";

const GetTodoList = gql`
	query MyQuery {
		todolist {
			is_done
			id
			title
		}
	}
`;

const { data, loading, error } = useQuery(GetTodoList);
```

##### Query dengan Apollo Client – Lazy Query

`useLazyQuery` sangat cocok untuk mengeksekusi _query_ sebagai respons terhadap _event_ selain rendering komponen. Tidak seperti `useQuery`, saat memanggil `useLazyQuery` tidak langsung mengeksekusi _query_ yang terkait. Sebagai gantinya, mengembalikan fungsi _query_ dalam hasil yang dipanggil kapan pun dan siap untuk menjalankan _query_. Berikut adalah contoh dari penggunaan `useLazyQuery` dengan _Apollo Client_:

```js
import { gql, useQuery, useLazyQuery } from "@apollo/client";

function todoList() {
	const [getTodo, { data, loading, error }] = useLazyQuery(GetTodoList);

	const onClickGetData = () => {
		getTodo();
	};
}
```

##### Query dengan Apollo Client – Refetching

_**Refetching**_ memungkinkan untuk _refresh_ hasil _query_ sebagai respons terhadap tindakan pengguna tertentu dan bukan menggunakan interval tetap. Kita dapat secara opsional menyediakan objek variabel baru ke fungsi `refetch`. Jika tidak, _query_ akan menggunakan variabel yang sama dengan yang digunakan dalam eksekusi sebelumnya. Berikut adalah contoh dari penggunaan `refetch` dengan _Apollo Client_:

```js
function todoList() {
	const [getTodo, { data, loading, error, refetch }] = useLazyQuery(GetTodoList);

	const onClickGetData = () => {
		refetch();
	};
}
```

#### Mutation

##### Mutation dengan Apollo Client

Contoh cara melakukan _mutation_ dengan _Apollo Client_ untuk **insert data** sebagai berikut:

```js
import { gql, useQuery, useMutation } from "@apollo/client";

const InsertTodo = gql`
	mutation MyMutation($object: todolist_insert_input!) {
		insert_todolist_one(object: $object) {
			id
		}
	}
`;
```

Contoh cara melakukan _mutation_ dengan _Apollo Client_ untuk **update data** sebagai berikut:

```js
const UpdateTodo = gql`
	mutation MyMutation($id: Int!, $is_done: Boolean) {
		update_todolist_by_pk(pk_columns: { id: $id }, _set: { is_done: $is_done }) {
			id
		}
	}
`;
```

Contoh cara melakukan _mutation_ dengan _Apollo Client_ untuk **delete data** sebagai berikut:

```js
const DeleteTodo = gql`
	mutation MyMutation($id: Int!) {
		delete_todolist_by_pk(id: $id) {
			id
		}
	}
`;
```

#### Subscription

##### Setting Subscription

Install _**subscriptions-transport-ws**_ untuk mengaktifkan koneksi _websocket_ yaitu dengan menggunakan perintah `npm install @apollo/client subscriptions-transport-ws`.

##### Subscription menggunakan useSubsciption

Contoh dari penggunaan `useSubscription` adalah sebagai berikut:

```js
import { useSubscription } from "@apollo/client";

const SubscriptionTodo = gql`
	subscription MySubscription {
		todolist {
			id
			is_done
			title
		}
	}
`;

const { data, loading, error } = useSubscription(SubscriptionTodo);
```

## Task

### Menghubungkan project React dengan GraphQL, kemudian membuat Query untuk get all data dan get data by id

Pada tugas ini yaitu menghubungkan project React yang disediakan dengan GraphQL. Untuk soal dan hasil jawabannya adalah sebagai berikut:

#### 1. Menghubungkan project React yang disediakan dengan GraphQL.

Berikut untuk project react yang digunakan:

[Project React](https://github.com/muhammad-muchson/GrapQL_Query_task_starter)

Berikut untuk tampilan dari _database_ yang telah dibuat menggunakan hasura:

![database](./screenshots/06_Database%20tabel%20passenger.png)

#### 2. Melakukan query dari database yang dibuat. Sehingga, ketika aplikasi pertama kali dibuka akan langsung melakukan fetch semua data dan menampilkannya.

Berikut untuk _source code_ dari query untuk get all data passenger:

[Source Code Contants](./praktikum/src/utils/contants.js)

[Source Code Apollo Client](./praktikum/src/graphql/index.js)

[Source Code Apollo Provider](./praktikum/src/App.js)

[Source Code Query Get All Passengers](./praktikum/src/graphql/gql.js)

[Source Code Display All Data Passengers](./praktikum/src/component/ListPassenger.js)

[Source Code Loading](./praktikum/src/component/Loading/Loading.js)

Berikut untuk tampilan saat _loading_ fetch all data passengers:

![loading-fetch-all-passengers](./screenshots/01_Loading%20query%20fetch%20all%20passenger.png)

Berikut untuk tampilan saat berhasil get all data passengers:

![display-get-all-passengers](./screenshots/02_Query%20get%20all%20passenger.png)

#### 3. Membuat fitur melakukan query berdasarkan inputan dari user, sehingga dapat menampilkan data sesuai dengan input berdasarkan id.

Berikut untuk _source code_ dari query untuk get data passenger by id:

[Source Code Contants](./praktikum/src/utils/contants.js)

[Source Code Apollo Client](./praktikum/src/graphql/index.js)

[Source Code Apollo Provider](./praktikum/src/App.js)

[Source Code Query Get Passenger By Id](./praktikum/src/graphql/gql.js)

[Source Code Display Passengers By Id](./praktikum/src/component/ListPassengerById.js)

[Source Code Loading](./praktikum/src/component/Loading/Loading.js)

Berikut untuk tampilan saat _loading_ fetch data passenger by id:

![loading-fetch-passenger-by-id](./screenshots/03_Loading%20query%20fetch%20passenger%20by%20id.png)

Berikut untuk tampilan saat berhasil get data passengers by id:

![display-fetch-passenger-by-id](./screenshots/04_Query%20get%20passenger%20by%20id.png)

#### Tampilan full website

Berikut untuk tampilan full websitenya:

![full-website](./screenshots/05_Tampilan%20full%20website.png)

#### Untuk soal lebih lengkap dari praktikum materi GraphQL - Query and Apollo Client adalah sebagai berikut:

[Soal Praktikum Materi GraphQL - Query and Apollo Client](https://docs.google.com/document/d/1adlkVrgw52__qGZdXFAJoCuCCA0xCq8tSyArmNAjeOY/edit?usp=sharing)
