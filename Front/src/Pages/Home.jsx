import React, { useEffect } from 'react';
import NavBar from '../component/Navbar';
import SubNavBar from '../component/SubNavBar';
import Noticias from '../component/Noticias/Noticias';


export default function Home(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []); // El segundo argumento asegura que esta función se ejecute solo una vez, después de que el componente se monte

    return(
        <div>
            <NavBar/>
            <SubNavBar/>
            <Noticias/>
        </div>
    )
}