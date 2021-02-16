import React, {Fragment, useState} from 'react';

const Formulario = () => {

 //el set se inicializo
    //para uso de esa función se recomienda esa estructura, donde el primer elem. 
    //será del estado, y el segundo que lo modifica.

    //"useState": es donde se va a color el vlor ini. del estado.
const [datos, setDatos]= useState({
    nombre: '',
    apellido: ''
})
const handleInputChange = (event)=>{

        setDatos({
            ...datos, [event.target.name] : event.target.value //aquí guarda los datos que había en el objeto
            // y luego relaciona lo que hay en el input, con su valor
        })
}
const enviarDatos = (event)=>{
event.preventDefault()
console.log(datos.nombre, " ", datos.apellido)
}
    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className ="col-md-3">
                     <input placeholder = "Ingrese nombre" className="form-control" type="text" name="nombre" onChange={handleInputChange}/>           
                </div>
                <div className ="col-md-3">
                     <input placeholder="Ingrese apellido"  className="form-control" type="text" name="apellido" onChange={handleInputChange}/>             
                </div>
                <div className ="col-md-3">
                     <button className="btn btn-secondary" type="submit"> Enviar </button>            
                </div>

            </form>
        </Fragment>
     );
}
 
export default Formulario;

