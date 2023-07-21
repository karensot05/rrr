import logo from './logo.svg';
import './App.css';
import C01componente from './componente/C01componente';
import Contador from './componente/C02contador';
import Contador2 from './componente/C03dobleestado';
import Variable from './componente/C04variable';
import Operador from './componente/C05operadorTernario';
import Matriz from './componente/C06matriz1';

function App() {
  return (
    <div >
      <h1>Primer componente</h1>
      <C01componente/>
      <h1>Segundo componente</h1>
      <Contador/>
      <h1>Tercer componente</h1>
      <Contador2/>
      <h1>Cuarto componente</h1>
      <Variable/>
      <h1>Quinto componente</h1>
      <Operador/>
      <h1>Sexto componente</h1>
      <Matriz/>
      
      
      
    </div>
  );
}

export default App;
