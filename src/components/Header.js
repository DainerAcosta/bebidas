import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <Fragment>
            <header className="bg-alert">
                <div className="container mt-2">
                    <h1>Busca Recetas de Bebidas</h1>
                    <Link style={{color: 'white', fontSize: 20}} to={'./'}>Home<br/></Link>
                    <Link style={{color: 'white', fontSize: 20}} to={'./buscarBebida'}>Buscar receta<br/></Link>
                    <Link style={{color: 'white', fontSize: 20}} to={'./stepper'}>stepper<br/></Link>
                </div>
            </header>
        </Fragment>
     );
}
 
export default Header;