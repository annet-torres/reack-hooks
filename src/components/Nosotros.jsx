import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom"
const Nosotros = () => {
const [equipo, setEquipo] = useState([])

    useEffect(()=>{
       // console.log("useeffect")
        ObtenerDatos()
    }, [])

    const ObtenerDatos = async ()=>{
const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
 const users = await data.json()
 console.log(users)
 setEquipo(users.civilizations)

    }
    return ( 
        <div>
        <h1>Nosotros 1</h1>
        <ul>
            {
            equipo.map(item =>(
                <li key={item.id}>
                    <Link to= {`/nosotros/${item.id}`}>
                    {item.name} - {item.expansion}
                    </Link>
                   
                  
                </li>

            ))
            }
        </ul>
    </div>
     );
}
 
export default Nosotros;