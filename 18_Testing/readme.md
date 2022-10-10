# (18) Testing

## Resume

Point yang dipelajari adalah:

1. Basic Testing
2. Membuat Basic Testing menggunakan RTL
3. Testing Custom Hook

### Basic Testing

#### Apa itu testing

**_Testing_ adalah proses memverifikasi bahwa _test assertions_ benar dan _code_ tetap benar sepanjang masa aplikasi**. _**Test assertion**_ ini adalah ekspresi _boolean_ yang mengembalikan nilai _true_ kecuali ada _bug_ pada _code_.

#### Manfaat testing

Walaupun menambahkan waktu dan _code_ dalam membuat sebuah _testing_, _testing_ memiliki beberapa **manfaat** yaitu:

1. Ketika aplikasi yang dibuat mempunyai _coverage_ yang baik atau mayoritas _codebase_ tercover oleh _test_, maka akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi. Saat mengubah bagian tersebut dan terdapat bagian yang lain menjadi rusak akan dapat segera mengetahuinya.
2. Menguragi _bug_ pada aplikasi. Walaupun _testing_ tidak menjamin aplikasi yang dibuat terbebas dari _bug_, tetapi dapat mencegah dengan beberapa hal yang berpotensi menjadi _bug_.

#### Kategori Testing

Secara umum, cara melakukan _test_ di _React_ dibagi menjadi dua kategori, yaitu:

1. _Rendering component trees_\
   Di dalam _environment test_ yang sudah disederhanakan dan ditegaskan pada keluarannya, maka dapat fokus pada bagian ini.
2. Menjalankan aplikasi secara lengkap\
   Di dalam _environment_ peramban atau _browser_ yang asli, ini dikenal sebagai _test_ “_**end-to-end**_”.

#### Pertimbangan Memilih Tools Untuk Testing

1. Kecepatan iterasi vs _environtment_ yang realistis\
   Beberapa _tools_ menawarkan _feedback loop_ yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. _Tools_ lain mungkin menggunakan _environment_ peramban yang asli, tetapi mengurangi kecepatan iterasi dan lebih _flakier_ pada _server_ integrasi berkelanjutan.
2. Seberapa banyak _mock_ yang harus dibuat\
   Dengan komponen, perbedaan antara _test_ “**unit**” dan “**integrasi**” dapat tidak sesuai. Pertimbangan pemilihan _tools_ untuk _testing_ dapat dilakukan sesuai dengan kebutuhan masing-masing.

#### Rekomendasi Tools yang digunakan dalam Testing pada React

1. _**Jest**_\
   **_Jest_ adalah _test runner_ pada _Javascript_ yang dapat mengakses _DOM_ melalui _jsdom_**. _Jest_ memberikan kecepatan iterasi yang bagus dan dikombinasikan dengan fitur-fitur yang powerful seperti mocking _modules_ dan _timers_, sehingga dapat memiliki kontrol lebih pada _code_ yang dijalankan. Berikut adalah contoh penggunaan dari _jest_ untuk sebuah _testing_:

   ```js
   // math.js
   function sum(x, y) {
   	return x + y;
   }

   import sum from "./math.js";

   describe("sum", () => {
   	test("sums up to values", () => {
   		expect(sum(2, 4)).toBe(6);
   	});
   });
   ```

2. _**React Testing Library (RTL)**_\
   **_React testing library_ adalah seperangkat helpers yang memungkingkan untuk melakukan _test_ komponen pada _React_ tanpa bergantung pada detail implementasinya**. Pendekatan ini membuat _refactoring_ menjadi mudah dan mendorong menerapkan _best practices_ untuk aksesibilitas.

#### Cara Install Tool untuk testing pada React

Jika menginstall aplikasi _React_ menggunakan perintah `create-react-app`, maka _Jest_ dan _React Testing Library_ akan secara _default_ sudah terinstall. Tetapi jika menggunakan _custom React Setup_, maka perlu menginstall dan melakukan _set up_ untuk _Jest_ dan _React Testing Library_.

### Membuat Basic Testing menggunakan RTL

#### Rendering Komponen

##### Render dan Debug

Pada _RTL_ memiliki fungsi _render_ yang digunakan untuk merender _file JSX_ apapun yang dibutuhkan. Setelah dirender, baru bisa memiliki akses ke komponen _React_ yang akan dilakukan _testing_. Untuk meyakinkan bahwa _file JSX_ sudah terender, dapat menggunakan fungsi _debug RTL_. _React Testing Library_ digunakan untuk berinteraksi dengan komponen seperti manusia. Oleh karena itu, sering melihat struktur _HTML_ sebagai output dan fungsi _render_. Berikut adalah contoh penerapan dari _Render_ dan _Debug_ pada _RTL_:

```js
import React from "react";

const title = "Hello React";

function App() {
	return <div>{title}</div>;
}

export default App;

import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	test("renders App component", () => {
		render(<App />);

		screen.debug();
	});
});
```

#### Memilih Elemen untuk Testing

_React Testing Library_ menawarkan berbagai fungsi untuk mendapatkan elemen yang digunakan untuk _assertions_ atau untuk interaksi pengguna. Lalu, dapat memilih elemen dengan fungsi _object screen RTL_. Salah satu contohnya adalah `getByText` untuk memilih teks dari elemen yang sudah dipilih. Berikut adalah contoh penerapan `getByText` di _RTL_:

```js
import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	test("renders App component", () => {
		render(<App />);

		// implisit asserstion
		// not recommended
		screen.getByText("Search:");

		// explicit asserstion
		// recommended
		expect(screen.getByText("Search:")).toBeInTheDocument();
	});
});
```

#### Kategori Testing

Contoh lain yang bisa digunakan untuk _testing_ adalah sebagai berikut:

| Fungsi          | Cara Implementasi                                      |
| --------------- | ------------------------------------------------------ |
| LabelText       | `getByLabelText: <label for=”search”` />               |
| PlaceholderText | `getByPlaceholderText: <input placeholder=”Search”` /> |
| AltText         | `getByAltText: <img alt=”profile” />`                  |
| DisplayValue    | `getByDisplayValue: <input value=”Javascript” />`      |

#### Handle Event di dalam Testing

Berikut adalah contoh penerapan _handle event_ dalam melakukan _testing_:

```js
function Search ({ value, onChange, children}) {
    return (
        <div>
            <label htmlFor="search">{children}</label>
            <input id="search" type="text" value={value} onChange={onChange} />
        </div>
    );
}

describe("Search", () => {
    test("calls the onChange callback handler", () => {
        const onChange = jest.fn();

        render(
            <Search value="" onChange={onChange}>
                Search:
            </Search>
        );

        fireEvent.change(screen.getByRole("textbox"). {
            target: { value: "Javscript" },
        });

        expect(onChange).toHaveBeenCalledTimes();
    });
});
```

#### Handle Asynchronous di dalam Testing

Untuk melakukan _handle asynchronous_ dapat digunakan pada kasus yaitu ketika ingin melakukan _testing fetch_ sebuah _API_. Pada kasus ini perlu membuat sebuah _mock_ untuk _axios_ atau _library_ untuk _fetch API_ yang lain. Selanjutnya, perlu membuat sebuah _mock promise_ hasilnya ketike _resolve_ atau _reject_.

### Testing Custom Hook

#### Library yang digunakan

Untuk mengetes _custom hook_ yaitu menggunakan _**React Hooks Testing Library**_ yang akan memberikan alat-alat untuk mengetest _hook_ tanpa merender satu komponen.

#### Cara install dan Dokumentasi

Cra menginstall _React Hooks Testing Library_ adalah dengan menggunakan perintah `npm install -D @testing-library/react-hooks`.
Untuk dokumentasi dari _React Hooks Testing Library_ adalah [https://react-hooks-testing-library.com/](https://react-hooks-testing-library.com/)
