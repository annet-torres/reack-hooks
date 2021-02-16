import React, { Fragment,useState } from 'react';
import { useForm } from 'react-hook-form' ; //importamos la libreria

// ref = referencia
const EjemploUno = () => {
    const {register, errors, handleSubmit} = useForm();
    const [entradas, setEntradas] = useState([])

    const onSubmit = (data, e) =>{
        console.log(data)
        setEntradas ([ ...entradas, data ]) //el espaciado entre los puntos es importante
        e.target.reset()


    }
   

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="titulo" placeholder ="Ingrese el título" className ="form-control my-2"
                ref = {
                    register({
                       required :{value: true, message : 'Campo obligatorio'},
                        minLength :{ value : 2, message : 'Mínimo 2 letras'}
                    })
                }
                />
                { errors.titulo &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.titulo.message}
                    </span>
                }
                
                <input name="descripcion" placeholder ="Ingrese descripción" className ="form-control my-2"
                ref = {
                    register({
                       required :{value: true, message : 'Campo obligatorio'},
                        minLength :{ value : 2, message : 'Mínimo 2 letras'}
                    })
                }
                />
                { errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.descripcion.message}
                    </span>
                }
                <button className="btn- btn-secondary">Agregar</button>

            </form>
            <div className="mt-2 d-flex ">
                {
                    entradas.map((item, index) =>
                    <div className= "card m-3 p-5 align-items-center " key= {index}>
                        <h1 >
                            {item.titulo}
                        </h1>
                       
                        <p>
                             {item.descripcion}
                        </p>
                        </div>
                    )
                }
            </div>
           
        </Fragment>
      );
}
 
export default EjemploUno;