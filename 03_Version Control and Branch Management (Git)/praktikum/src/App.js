import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Welcome</h1>
        <h2>Ini adalah project web</h2>
        <h3>Project web menggunakan react</h3>
      </header>

      {/* develop */}
      <section className="container">
        {/* feature one */}
        <ul>
          <h1>Feature One</h1>
          <li>Try Out</li>
          <li>Modul</li>
          <li>Latihan Soal</li>
        </ul>

        {/* feature two */}
        <ul>
          <h1>Feature Two</h1>
          <li>Pretest</li>
          <li>Postest</li>
          <li>Jadwal</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
