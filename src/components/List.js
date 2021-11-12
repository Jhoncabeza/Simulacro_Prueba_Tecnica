import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {url} from '../helpers/url';
import { Tabla } from './ListStyles';

const List = () => {
    const [registro, setRegistro] = useState([]); 
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(url)
        .then(response => {
            setRegistro(response.data)
        })
        .catch(error => {
            console.log(error);
        })
}

const deleteData = (id) => {
     axios.delete(url+id)
     .then(response => {
         getData();
       console.log(response.data)
    })
    .catch(error => {
        console.log(error);
    })
}
    return (
        <div>
            <Tabla>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Deporte</th>
                    <th>Equipo</th>
                   
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         registro.map(data => (
                             <tr key={data.id}>
                                 <td>{data.nombre}</td>
                                 <td>{data.tipo}</td>
                                 <td>{data.equipo}</td>
                                 <td><button onClick={() => deleteData(data.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
            </Tabla>
        </div>
    )
}

export default List
