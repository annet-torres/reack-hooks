import React, { Fragment } from 'react';

const Comentarios = ({sujeto}) => {
    return (  
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className = "media ">
                <img src={sujeto.urlImagen} alt="" className="mr-3"/>
                <div className ="media-body ">
                    <h5 className ="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}

                </div>

            </div>
        </Fragment> 
    );
}
 
export default Comentarios;