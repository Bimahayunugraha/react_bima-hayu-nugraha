# (24) GraphQL - Subscription

## Resume

Point yang dipelajari adalah:

1. Setting Subscription
2. Subscription menggunakan useSubscription
3. Subscription menggunakan subscribeToMore

### Setting Subscription

#### 1. Install subscriptions-transport-ws untuk mengaktifkan koneksi websocket (older protocol)

Perintah untuk menginstallnya adalah `npm install @apollo/client subscriptions-transport-ws`

#### 2. Install graphql-ws untuk mengaktifkan koneksi websocket (newer protocol)

Perintah untuk menginstallnya adalah `npm install graphql-ws`

#### 3. Melakukan import untuk module yang dibutuhkan

```js
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HtppLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
```

#### 4. Membuat httpLink untuk query dan mutation, wsLink untuk subscription, dan menambahkan header untuk authentication.

```js
const httpLink = new HttpLink({
  uri: 'uri-graphql',
  headers: {
    'x-hasura-admin-secret': 'api-key',
  },
});

const wsLink = new WebSocketLink(
    url: 'uri-graphql',
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret': 'api-key',
            },
        }
    },
);

```

#### 5. Menambahkan fungsi split dan gunakan sebagai link ketika membuat client.

Fungsi _**split**_ digunakan untuk menggabungkan kedua _Link_ menjadi satu _Link_ yang menggunakan satu atau lainnya sesuai dengan jenis operasi yang dijalankan. Ketika operasi adalah _subscription_ yang sama maka gunakan _**wsLink**_, jika tidak maka gunakan _**httpLink**_ untuk query dan mutation. Berikut adalah contoh implementasi dari spilt:

```js
const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === "OperationDefinition" && definition.operation === "subscription";
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});
```

### Subscription menggunakan useSubscription

#### Import useSubscription dari apollo client dan definikan subscription

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
```

#### Invoke subscription dan consume data

```js
const { data, loading, error } = useSubscription(SubscriptionTodo);
```

### Subscription menggunakan subscribeToMore

_**subscribeToMore**_ adalah fungsi yang memungkinkan dapat menjalankan _subscription_, biasanya _subscribe_ ke bidang tertentu yang disertakan dalam _query_ atau ketika _server_ hanya mengembalikan 1 data yang diperbarui, bukan semua data, maka kita perlu memperbarui data sebelumnya dalam variabel sebelumnya dan mengembalikan data yang diperbarui. Berikut adalah contoh implementasi dari subscribeToMore:

```js
function TodoList() {
	const { data, loading, error, subscribeToMore } = useQuery(GetTodo);

	useEffect(() => {
		subscribeToMore({
			document: SubscriptionTodo,
			updateQuery: (prev, { subscriptionData: { data } }) => {
				return data;
			},
		});
	}, []);
}
```

## Task

### Membuat subscription menggunakan project React yang telah di pakai sebelumnya

Pada tugas ini yaitu membuat subscription menggunakan project React yang telah di pakai sebelumnya yaitu project passenger.

Berikut adalah _source code_ dari implementasi subscription:

[Source Code Contants Create URL For Web Socket](./praktikum/src/utils/contants.js)

[Source Code Initialize GraphQL Web Socket](./praktikum/src/graphql/index.js)

[Source Code GraphQL Subsciption](./praktikum/src/graphql/gql.js)

[Source Code Display Data with Subsciption](./praktikum/src/component/ListPassenger.js)

Berikut adalah tampilan saat berhasil get data dengan Subscription dan Web Socket:
![subscription-and-web-socket](./screenshots/Tampilan%20berhasil%20get%20data%20dengan%20Subscription%20dan%20Web%20Scoket.png)

#### Untuk soal lebih lengkap dari praktikum materi GraphQL - Subscription adalah sebagai berikut:

[Soal Praktikum Materi GraphQL - Subscription](https://docs.google.com/document/d/1gw4hP-DPt5Um9LyaZ_5OIo2Od8he0t43Aj576_xHFOs/edit?usp=sharing)
