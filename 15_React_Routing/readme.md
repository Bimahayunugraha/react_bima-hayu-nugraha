# (15) React Routing

## Resume

Point yang dipelajari adalah:

1. Routes pada React
2. Bagaimana penggunakan URL param pada React
3. Hook pada Routing React

### Routes pada React

#### Apa itu routes pada React

_**Routes**_ merupakan modul dalam _React_ yang berfungsi untuk melakukan proses navigasi pada _SPA (Single Page Application)_.

#### MPA vs SPA

##### MPA (Multi Page Application)

_**Multi Page Application (MPA)**_ atau juga disebut dengan **tradisional web app** adalah jenis aplikasi _website_ dimana perlu memuat ulang seluruh halaman _web_ setiap kali membuat permintaan baru.

##### SPA (Single Page Application)

_**Single Page Application (SPA)**_ adalah salah satu jenis aplikasi _website_ dimana hanya ada satu halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

##### Kelebihan SPA dan MPA

| Single Page Application                            | Multi Page Application                                                                              |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Waktu loading website jauh lebih cepat             | SEO website akan lebih mudah digunakan                                                              |
| Tidak ada query tambahan ke server                 | Memudahkan untuk mengubah halaman tertentu pada setiap kebutuhan yang berbeda                       |
| Front-end yang cepat dan responsif                 | Menggunakan tools analissi seperti Google Analytics yang dapat terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna (user experience) |                                                                                                     |

##### Kekurangan SPA dan MPA

| Single Page Application                     | Multi Page Application                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Tidak bagus dalam hal SEO                   | Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application |
| Berat saat di load atau dibuka pertama kali | Perlu mengintegrasikan antara front-end dan back-end                                        |
| Kurang aman dibanding dengan website biasa  | Lebih sering membutuhkan maintenance dan update                                             |
| Masalah kompatibilitas browser              | Mungkin akan lebih sering menemukan masalah performa pada website                           |

#### Library React Router

#### Cara instalasi

Untuk instalasinya dapat menggunakan perintah `npm install react-router-dom --save`

##### Komponen-komponen yang sering dipakai di React Router DOM

1. BrowserRouter\
   _*BrowserRouter*_ digunakan sebagai _router_ yang menggunakan _API history_ dari _HTML5_, sehingga dapat menggunakan _location_ untuk menyinkronkan antara _UI_ dengan _URL_. Di dalam object _location_ dapat merepresentasikan dimana lokasi dari aplikasi sekarang. Berikut adalah contoh dari penggunaan _BrowserRouter_:

   ```js
   <BrowserRouter>{/* code */}</BrowserRouter>
   ```

2. Route\
   _*Route*_ digunakan sebagai pengarah jalannya lalu lintas pada suatu aplikasi _web_. Di dalam _route_ terdapat _attribute **path**_ yang merupakan _URL_ pada _browser_ untuk proses _routing_. Di dalam _route_ juga terdapat _attribute **component**_ yang merupakan suatu komponen yang akan ditampilkan kepada _user_ saat mengakses _path_ yang didefinisikan. Berikut adalah contoh dari penggunaan _Route_:

   ```js
   <Route exact path="/profil" exact component={Profil} />
   ```

3. Switch\
   _**Switch**_ digunakan untuk membungkus kumpulan dari beberapa **_component route_**. Terdapat _**exact**_ yang bertugas untuk memastikan _route_ hanya merender _component_ yang memiliki _path_ yang cocok, jika tidak ada yang cocok, maka _route_ yang akan di _render_ yaitu _route_ terakhir dengan _component **NotFound**_. Berikut adalah contoh dari penggunaan _Switch_:

   ```js
   <Switch>{/* code */}</Switch>
   ```

4. Link\
   _**Link**_ digunakan untuk berpindah antar halaman, _property **to**_ tersebut merujuk pada _path_ di _route_ yang akan dituju. Berikut adalah contoh dari penggunaan _Link_:

   ```js
   <Link to="/profil">Menuju profil</Link>
   ```

### Bagaimana penggunakan URL params pada React

#### Apa itu URL parameter

_**URL params**_ atau _**parameter URL**_ adalah suatu _parameter_ yang nilainya di tetapkan secara dinamis di _URL_ pada sebuah halaman. Berikut adalah contoh dari _URL params_:

```js
<Route exact path="/movie/:id" component={MovieDetailsContaoner} />
```

#### Contoh penggunaan `this.props.math.params`

```js
componentDidMount() {
    this.setState({id : this.props.match.params.id})
}
```

#### Perbedaan Link dan Redirect

| Link                                  | Redirect                                |
| ------------------------------------- | --------------------------------------- |
| Dapat digunakan pada kondisi apapun   | Lebih sering digunakan pada halaman 403 |
| Memberikan history baru pada browser  | Menimpa history pada browser            |
| Bereaksi dengan click seperti a hrefa | Bereaksi dengan suatu kondisi           |

#### Contoh dari Link:

```js
<Link to="/profil">Menuju profil</Link>
```

#### Contoh dari Redirect:

```js
<Route exact path="/">
	{loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
```

### Hook pada Routing React

#### useHistory

`useHistory` memberikan akses ke _instance_ riwayat yang dapat digunakan untuk bernavigasi. Berikut adalah contoh dari penggunaan `useHistory`:

```js
import { useHistory } from "react-router-dom";

function MovieDetailsContainer() {
	const history = useHistory();
	const count = history.length;
	return (
		<div>
			<h1>{count}</h1>
		</div>
	);
}

export default MovieDetailsContainer;
```

Beberapa properti yang ada di useHistory
| Properti | Kegunaan |
| ------------------------------------- | --------------------------------------- |
| `length` | Jumlah entri dalam kumpulan riwayat |
| `go` | Memindahkan penunjuk di tumpukan riwayat sebanyak n entri |
| `goBack` | Setara dengan go (-1) |
| `goForward` | Setara dengan go (1) |
| `push` | Mendorong entri baru ke tumpukan riwayat |
| `replace` | Mengganti entri saat ini di tumpukan riwayat history |

#### useLocation

`useLocation` mengembalikan suatu objek lokasi yang mewakili _URL_ saat ini, seperti `useState` yang mengembalikan lokasi baru, setiap _URL_ berubah. Berikut adalah contoh dari penggunaan `useLocation`:

```js
import { useLocation } from "react-router-dom";

function MovieDetailsContainer() {
	const address = useLocation();
	console.log("address => ", address);
	return <div></div>;
}

export default MovieDetailsContainer;
```

#### useParams

`useParams` mengembalikan objek pasangan kunci atau nilai _parameter URL_ yang dapat digunakan untuk mengakses `match.params` dari `<Route>` saat ini. Berikut adalah contoh dari penggunaan `useParams`:

```js
import { useParams } from "react-router-dom";

function MovieDetailsContainer() {
	const { firstName, lastName } = useParams();

	return (
		<div>
			<h1>
				Hai, {firstName} {lastName}
			</h1>
		</div>
	);
}

export default MovieDetailsContainer;
```

```js
<Route path="/movie/:firstName/:lastName" component={MovieDetailsContaoner} />
```

#### useRouteMatch

`useRouteMatch` mencoba mencocokan _URL_ saat ini dengan cara yang sama seperti `<Route>`. Sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>. Berikut adalah contoh dari penggunaan `useRouteMatch`:

```js
import { Route } from "react-router-dom";

function BlogPost() {
	return (
		<Route
			path="/blog/:slug"
			render={({ match }) => {
				return <div></div>;
			}}
		/>
	);
}
```

## Task

### 1. Melanjutkan assignment sebelumnya yaitu daftar pekerjaan pada Section 14 - React Hooks dengan menambahkan routing

Pada tugas ini yaitu melanjutkan assignment sebelumnya yaitu daftar pekerjaan pada Section 14 - React Hooks dengan menambahkan routing, untuk kiterianya adalah sebagai berikut:

1. Buatlah navbar dengan menggunakan link, home dengan path : ???/" dan about dengan path "/about".

2. Untuk page about terdapat navbar baru yaitu About App dengan path : ???/aabout/about-app"
   dan About Author dengan path : ???/about/about-author".

3. Jika path yang di inputkan tidak ada dalam route yang dibuat, buatlah page not match /
   not found pada path tersebut

4. Jika link mengarah ke halaman yang sama berikan replace atau redirect agar tidak
   menambah history baru pada browser (optional, nilai tambah)

5. Icon atau tampilan navbar bebas namun konsep tetap sama

(\*) Kerapihan dan inovasi menjadi suatu nilai tambah

Berikut untuk link soal lebih lengkapnya:

[soal-praktikum-react-routing](https://docs.google.com/document/d/1Ov85LUDh1ttc7BnnQ3DTz_XLMvw1WnQ3A52dE_wmoBw/edit?usp=sharing)

#### Tampilan Awal Aplikasi

Berikut adalah _source code_ dari tampilan awal aplikasi daftar pekerjaan atau todo list:

[source-code](https://github.com/Bimahayunugraha/react_bima-hayu-nugraha/tree/15_React_Routing/15_React_Routing/praktikum/src/pages/Todo)

Berikut adalah hasil _output_ dari tampilan awal aplikasi daftar pekerjaan atau todo list:

![tampilan-awal](./screenshots/01_tampilan-awal.png)

#### Tampilan Saat Navbar Todo Home Collapse

Berikut adalah _source code_ dari tampilan saat navbar home collapse:

[source-code-1](./praktikum/src/components/Partials/Todo/Navbar/Navbar.jsx)

[source-code-2](./praktikum/src/pages/Todo/Todo.jsx)

Berikut adalah hasil _output_ dari tampilan saat navbar home collapse:

![tampilan-navbar-home-collapse](./screenshots/02_navbar-home-collapse.png)

#### Tampilan Halaman About App

Berikut adalah _source code_ dari tampilan halaman about app:

[source-code-1](./praktikum/src/pages/About/components/AboutApp/AboutApp.jsx)

[source-code-2](./praktikum/src/pages/About/About.jsx)

Berikut adalah hasil _output_ dari tampilan halaman about app:

![tampilan-halaman-about-app](./screenshots/03_about-app.png)

#### Tampilan Halaman About Author

Berikut adalah _source code_ dari tampilan halaman about author:

[source-code-1](./praktikum/src/pages/About/components/AboutAuthor/AboutAuthor.jsx)

[source-code-2](./praktikum/src/pages/About/About.jsx)

Berikut adalah hasil _output_ dari tampilan halaman about author:

![tampilan-halaman-about-author](./screenshots/04_about-author.png)

#### Tampilan Halaman Not Found

Berikut adalah _source code_ dari tampilan halaman not found:

[source-code](./praktikum/src/components/NotFound/NotFound.jsx)

Berikut adalah hasil _output_ dari tampilan halaman not found:

![tampilan-halaman-not-found](./screenshots/05_not-found.png)
