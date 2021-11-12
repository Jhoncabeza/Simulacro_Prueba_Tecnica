import React, { useState } from 'react'
import axios from 'axios';
import {url} from '../helpers/url'
import { Formu, FormuButton, FormuH2, FormuInput, FormuLabel, FormuSelect } from './FormStyles';


const Form = () => {
    const [deportista, setDeportista] = useState({
        nombre: '',
        tipo: '',
        equipo: '',
    })

    const { nombre, tipo, equipo } = deportista;

    const postData = () => {
        axios.post(url, deportista)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    const handleChanged = ({ target }) => {
        setDeportista({
            ...deportista,
            [target.name]: target.value
        })


    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Formu id="formulario" onSubmit={handleSubmit}>
                <FormuH2>Registro de deportistas</FormuH2>
                <hr />
                <div>
                    <FormuLabel>Nombre</FormuLabel>
                    <FormuInput placeholder="Ingrese Su Nombre" id="inputNombre" name="nombre" value={nombre} onChange={handleChanged}/>
                </div>
                <hr />
                <div>
                    <FormuLabel>Deporte </FormuLabel>
                    <FormuSelect id="selectTipo" name="tipo" value={tipo} onChange={handleChanged}>
                        <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                        <option name="Futbol" value="Futbol">Futbol</option>
                        <option name="Baloncesto" value="Baloncesto">Baloncesto</option>
                        <option name="Atletismo" value="Atletismo">Atletismo</option>
                        <option name="Natacion" value="Natacion">Natacion</option>
                        <option name="Tenis" value="Tenis">Tenis</option>
                    </FormuSelect>
                </div>
                <hr />
                <div>
                    <FormuLabel>Equipo</FormuLabel>
                    <FormuInput placeholder="Ingrese Su Equipo" id="inputEquipo" name="equipo" value={equipo} onChange={handleChanged} />
                </div>
            
    
                <div>
                    <FormuButton onClick={() => postData()} id="btnRegistro">Registrar</FormuButton>
                </div>
            </Formu>
        </div>
    )
}

export default Form
