import React from 'react';
import { useNoticias } from '../../context/NoticiasContext';
import "./Noticias.css";

const Noticias = () => {
    const { noticiasData } = useNoticias();

    if (!noticiasData) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga mientras los datos están siendo recuperados
    }
//https:///1fichier.com/?lj400nlxsgiog5p7hzdp
//https://www.fireload.com/64744a7c6f2de9f3/4422-Azul_Extremo_(2005)_720p_D_S_spa_eng_v.mkv
    return (
        <div className="product-container">
            <div className="project-container">
                <h2>Ultimas noticias de diarios argentinos</h2>
                <div className="timeline">
                    {noticiasData.map((val, ind) => (
                        <div className="relative" key={ind}>
                            <div className="dot"></div>
                            <a href={val.url} target="_blank" rel="noopener noreferrer">
                                <div className="pl-10">
                                    <span className="timeline-date">{new Date(val.publishedAt).toLocaleDateString('es-ES', {
                                        // year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                    <h3 className="timeline-title font-suecaslab1">{val.title}</h3>
                                    {/* <p className="text-grey-500 transition-colors duration-300 hover:text-gray-400">{val.author}</p> */}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='tiempo'>
              <h2>Tiempo</h2>
              <div className='futbol'>
                <h3>Noticias y data de futbol</h3>
                <a href="https://www.promiedos.com.ar/" target="_blank" rel="noopener noreferrer">
                <p>promiedos.com</p>
                </a>
                <a href="https://librefutboltv.net/" target="_blank" rel="noopener noreferrer">
                <p>librefutboltv.net</p>
                </a>
              </div>
            </div>
        </div>
    );
}

export default Noticias;



