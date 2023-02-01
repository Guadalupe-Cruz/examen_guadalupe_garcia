import React from "react";
import axios from "axios";

const apiColores = async (state:any) =>{
    const peticion = await axios.get('https://reqres.in/api/users&quot');
    state(peticion.data.data);
}

export{
    apiColores
}