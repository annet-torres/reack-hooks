import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

   
    console.log(useParams())
    const {id} =useParams()


    const [pueblo, setpueblo] = useState([])

    useEffect(()=>{
       // console.log("useeffect")
       const ObtenerDatos = async ()=>{
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const users = await data.json()
            console.log(users)
                setpueblo(users)
    
        }
    
        ObtenerDatos()
    }, [id])

  
    return (  
   
       <div>
          <h3>{pueblo.name}</h3>
          <p>{pueblo.team_bonus}</p>
       </div>
 
    );
}
 
export default User;