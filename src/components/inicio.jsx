import React, {useEffect,useState} from "react";
import { apiColores } from "../functions/functions";
import { Map } from "typescript";
import {map} from 'rxjs/operators';

export const Inicio = () =>{
    const [colores, setColores] = useState(null)
    useEffect(() => {
        apiColores(setColores)
    },[])
    return(
        <div style={{
            display:'flex',
            flexDirection:'row',
            margin:50,
            alignItems:'cente',
            alignContent:'space-between',
            justifyContent:'center',
            alignSelf:'center',
            flexWrap:'wrap',

        }}>
            {colores != null ? (
                colores.map(color => (
                    <div key={color.id}>
                        <div style ={{
                            backgroundColor:color.color,
                            width:450,
                            height:200,
                            padding:35
                        }}>
                            <h1>Nombre: {color.name}</h1>
                            <h1>Año: {color.year}</h1>
                            <h1>Valor pantone: {color.pantone_value}</h1>
                        </div>
                    </div>
                ))
            ) :('no hay colores')}  
        </div>
        
    )
}