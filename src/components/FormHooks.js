import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form' ; //importamos la libreria

const FormHooks = () => {
    const {register, errors, handleSubmit} = useForm();
    // handleSubmit(onSubmit) = para poder evaluar cada uno de los inputs, pero es importante que tenga la etiqueta "name"
  // {errors?.titulo?.message} = Si esto no tiene error, el mensaje no se pinta.
    const onSubmit= (data,e)=>{
        console.log(data) //Aquí se procesan los datos que se colocan en el input
        e.target.reset(); //limpia el input despues de darle enviar

    }

    return ( 
        <Fragment>
            <h1>Form Hooks</h1>
            <form onSubmit = {handleSubmit(onSubmit)}> 
                <input name ="titulo" className ="form-control mt-5 mb-3 " 
                ref= {register (
                    {
                        required : {
                            value: true,
                            message: 'Título obligatorio'
                                    }
                    }
                )}
                />
                <span className="text-danger text-small d-block mb-2">
                  {errors?.titulo?.message} 
                </span>
                <button className="btn btn-secondary">Enviar</button>
            </form>
        </Fragment>
     );
}
 
export default FormHooks;