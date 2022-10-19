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
