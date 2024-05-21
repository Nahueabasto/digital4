// import React from 'react';
// import CardNoticias from './CardNoticias';
// import { useNoticias } from '../../context/NoticiasContext';
// import "./Noticias.css"

// const Noticias = () => {
//     const { noticiasData } = useNoticias();

//     if (!noticiasData) {
//         return <div>Loading...</div>; // Mostrar un mensaje de carga mientras los datos están siendo recuperados
//     }

//     return (
//         <div className="product-container">
        
//         <div className="project-container">
//         <h2>Ultimas noticias de diarios argentinos</h2>
//         {noticiasData.map((val, ind) => {
//           return (
//             <CardNoticias
//             //id={val.id}
//               key={ind}
//               title={val.title}
//               author={val.author}
//               //publishedAt={val.publishedAt}
//               url={val.url}
//             />
//           );
//         })}
//       </div>
//       </div>
//     );
// }

// export default Noticias;
import React from 'react';
import { useNoticias } from '../../context/NoticiasContext';
import "./Noticias.css";

const Noticias = () => {
    const { noticiasData } = useNoticias();

    if (!noticiasData) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga mientras los datos están siendo recuperados
    }

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
                                        year: 'numeric',
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
            </div>
        </div>
    );
}

export default Noticias;



