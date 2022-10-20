# (23) GraphQL - Mutation

## Resume

Point yang dipelajari adalah:

1. Mutation dengan Apollo Client untuk insert data
2. Mutation dengan Apollo Client untuk update data
3. Mutation dengan Apollo Client untuk delete data

### Mutation dengan Apollo Client untuk insert data

Contoh cara melakukan _mutation_ dengan _Apollo Client_ untuk **insert data** sebagai berikut:

#### Import useMutation hook dari Apollo Client dan definisikan mutationnya

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

#### Invoke useMutation dan menggunakan array destruction untuk mendefinisikan mutation handler [insertTodo]

```js
const [insertTodo, { loading: loadingInsert }] = useMutation(InsertTodo, {
	refetchQueries: [GetTodolist],
});
```

#### Memanggil insertTodo dengan variabel

```js
insertTodo({
	variables: {
		object: {
			title: title,
			user_id: 1,
		},
	},
});
```

### Mutation dengan Apollo Client untuk update data

Contoh cara melakukan _mutation_ dengan _Apollo Client_ untuk **update data** sebagai berikut:

#### Mendefinisikan query untuk update data

```js
const UpdateTodo = gql`
	mutation MyMutation($id: Int!, $is_done: Boolean) {
		update_todolist_by_pk(pk_columns: { id: $id }, _set: { is_done: $is_done }) {
			id
		}
	}
`;
```

#### Membuat handler mutation untuk update todo

```js
const [updateTodo, { loading: loadingUpdate }] = useMutation(updateTodo, {
	refetchQueries: [GetTodo],
});
```

#### Memanggil query update

```js
const onClickItem = (idx) => {
	const item = data?.todolist.find((v) => v.id === idx);
	updateTodo({ variables: { id: idx, is_done: !item.is_done } });
};
```

### Mutation dengan Apollo Client untuk delete data

#### Mendefinisikan query untuk delete data

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

#### Membuat handler mutation untuk delete todo

```js
const [deleteTodo, { loading: loadingDelete }] = useMutation(deleteTodo, {
	refetchQueries: [GetTodo],
});
```

#### Memanggil query delete

```js
const onDeleteItem = (idx) => {
	deleteTodo({ variables: { id: idx } });
};
```

## Task

### Membuat mutation menggunakan project React pada Praktikum GraphQL - Query

Pada tugas ini yaitu membuat mutation menggunakan project React pada Praktikum GraphQL - Query yaitu project passenger. Untuk soal dan hasil jawabannya adalah sebagai berikut:

#### 1. Membuat fitur submit data

Berikut adalah _source code_ dari mutation untuk insert data:

[Source Code Mutation Insert Data](./praktikum/src/graphql/gql.js)

[Source Code Feature Input Data](./praktikum/src/component/PassengerInput.js)

Berikut adalah tampilan saat ingin insert data:

![insert-data](./screenshots/01_Saat%20insert%20data.png)

Berikut adalah tampilan saat berhasil insert data:

![berhasil-insert-data](./screenshots/02_Berhasil%20insert%20data.png)

#### 2. Membuat fitur delete data

Berikut adalah _source code_ dari mutation untuk delete data:

[Source Code Mutation Delete Data](./praktikum/src/graphql/gql.js)

[Source Code Feature Delete Data](./praktikum/src/component/ListItem.js)

Berikut adalah tampilan saat ingin delete data:

![delete-data](./screenshots/05_Saat%20delete%20data.png)

Berikut adalah tampilan saat berhasil delete data:

![berhasil-delete-data](./screenshots/06_Berhasil%20delete%20data.png)

#### 3. Membuat fitur edit atau update data.

Berikut adalah _source code_ dari mutation untuk update data:

[Source Code Mutation Update Data](./praktikum/src/graphql/gql.js)

[Source Code Feature Update Data](./praktikum/src/component/ListItem.js)

[Source Code Modal Update Data](./praktikum/src/component/UpdateModal.js)

Berikut adalah tampilan saat ingin update data:

![update-data](./screenshots/03_Saat%20update%20data.png)

Berikut adalah tampilan saat berhasil update data:

![berhasil-update-data](./screenshots/04_Berhasil%20update%20data.png)

#### Untuk soal lebih lengkap dari praktikum materi GraphQL - Mutation adalah sebagai berikut:

[Soal Praktikum Materi GraphQL - Mutation](https://docs.google.com/document/d/1QB3Yc5irk_zeIYZo5rxR6CGnMXGiICTujlyaWuZ7xqc/edit?usp=sharing)
