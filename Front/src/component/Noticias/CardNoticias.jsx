import React from 'react';
import { useNoticias } from '../../context/NoticiasContext';

const CardNoticias = (props) => {

    return (
        <div className="noticias">
                <div className='noticia'>
                    <h3>{props.title}</h3>
                    <p>{props.author}</p>
                    <p>{props.publishedAt}</p>
                    <a href={props.url}>Ver más</a>
                </div>
        </div>
    );
}

export default CardNoticias;