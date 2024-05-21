import React from 'react';
import "./CardNoticias.css"

const CardNoticias = (props) => {

    return (
        <div className="noticia">
                <div className='noticias'>
                <a href={props.url}>
                    <p>{props.title}</p>
                    <p>Diario: {props.author}</p>
                    <p>{props.publishedAt}</p>
                    </a>
                </div>
        </div>
    );
}

export default CardNoticias;