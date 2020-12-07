import './reset.css';
import NavBar from './components/global/NavBar';
import Main from './components/homes/Main';
import Footer from './components/global/Footer';
import ListProduct from '../src/productos/ListProduct'

function App() {
  return (
    <>
    <NavBar/>
    <ListProduct/>
   
    
    <Footer/>
    </>
  );
}

export default App;
