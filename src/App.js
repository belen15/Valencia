import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacto from './components/contacto';
import Productos from './components/productos';
import Inicio from './components/inicio';
import Navegador from './components/navbar.js';

function App() {
  return (
    <BrowserRouter>
      <Navegador />
        <Switch>
          
          <Route path="/Contacto">
            <Contacto />
          </Route>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
          
        </Switch>
    </BrowserRouter>
    
  );
}

export default App;
