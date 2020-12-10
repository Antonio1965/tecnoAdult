import './reset.css';
import NavBar from './components/global/NavBar';
import Main from './components/homes/Main';
import Footer from './components/global/Footer';
import ListProduct from '../src/productos/ListProduct'

function App() {
  return (
    <>
    <NavBar/>
    <ListProduct tipo='Tipo de Producto'
    lista=
    {[
      'imagen1',
      'imagen2',
      'imagen3',
      'imagen4',
      'imagen5',
      'imagen6',
      'imagen7',
      
    ]}
    />
   
    
    <Footer/>
    </>
  );
}

export default App;
