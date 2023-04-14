import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>
          <input type="text" id="valor1" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const t1 = document.getElementById('valor1').value
  const texto=t1;
  alert('El texto es:'+texto);
}

export default App;