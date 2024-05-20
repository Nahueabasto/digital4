// import React from 'react';
// import CardNoticias from './CardNoticias';
// import { useNoticias } from '../../context/NoticiasContext';

// const Noticias = () => {
//     const { noticiasData } = useNoticias();

//     if (!noticiasData) {
//         return <div>Loading...</div>; // Mostrar un mensaje de carga mientras los datos están siendo recuperados
//     }

//     return (
//         <div className="project-containerr">
//         {noticiasData.map((val, ind) => {
//           return (
//             <CardNoticias
//             //   id={val.id}
//               key={ind}
//               title={val.title}
//               author={val.author}
//               publishedAt={val.publishedAt}
//             />
//           );
//         })}
//       </div>
//     );
// }

// export default Noticias;

import React from 'react';
import CardNoticias from './CardNoticias';
import { useNoticias } from '../../context/NoticiasContext';

const Noticias = () => {
    const { noticiasData, error } = useNoticias();

    if (error) {
        return <div>Error: {error}</div>; // Show error message if there is an error
    }

    if (!noticiasData) {
        return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    if (!Array.isArray(noticiasData)) {
        return <div>Error: Data format is incorrect.</div>; // Show error message if data is not an array
    }

    return (
        <div className="project-containerr">
            {noticiasData.map((val, ind) => (
                <CardNoticias
                    key={ind}
                    title={val.title}
                    author={val.author}
                    url={val.url}
                />
            ))}
        </div>
    );
}

export default Noticias;

