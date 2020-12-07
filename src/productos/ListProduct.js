import './ListProduct.css';
//import Imagen3 from '../components/assets/imagen3.jpg';
import Imagen4 from '../components/assets/imagen4.jpg';
import Imagen5 from '../components/assets/imagen5.jpg';
//import Imagen6 from '../components/assets/imagen6.jpg';
import Celu1 from '../components/assets/celulares/celu1.jpg';
import Celu2 from '../components/assets/celulares/celu2.jpg';
import Celu3 from '../components/assets/celulares/celu3.jpg';

const ListProduct = () => {
    return ( 
        <div className='container'>
        <div className='container-product'>
            <div className="row-product">
                <div className="col-6 col-md-4 product" >
                    <h3>Titulo de producto</h3>
                    <img src={Celu1} alt='celu1'/>
                    <p>Detalles del productos</p>
                    <button className='boton'>Comprar</button>
                </div>

                <div className="col-6 col-md-4 product" >
                    <h3>Titulo de producto</h3>
                    <img src={Celu2} alt='celu2'/>
                    <p>Detalles del productos</p>
                    <button className='boton'>Comprar</button>
                </div>
                <div className="col-6 col-md-4 product">
                    <h3>Titulo de producto</h3>
                    <img src={Celu3} alt='celu3'/>
                    <p>Detalles del productos</p>
                    <button className='boton'>Comprar</button>
                </div>
                     
             </div>

        </div>
        </div>
     );
}
 
export default ListProduct;