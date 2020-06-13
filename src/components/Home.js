import React, { Fragment } from 'react';
import Header from './Header';

const Home = () => {
    return ( 
        <Fragment>
            <Header/>

            <h2 className="container mt-5">Bienvenido, aquí podras disfrutar de las mejores recetas en bebidas</h2>
        </Fragment>
     );
}
 
export default Home;