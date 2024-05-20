import React from 'react';
import { useNoticias } from '../../context/NoticiasContext';
import "./CardNoticias.css"

const CardNoticias = (props) => {

    return (
        <div className="noticia">
                <div className='noticias'>
                <a href={props.url}>
                    <p>{props.title}</p>
                    <p>{props.author}</p>
                    <p>{props.publishedAt}</p>
                    </a>
                </div>
        </div>
    );
}

export default CardNoticias;