import React from 'react';
import { LinkI, Nav } from './NavbarStyles';

const Navbar = () => {
    return (
        <div>
            <div>
                <Nav>
                <LinkI to="">Inicio</LinkI>
                <LinkI to="/Registro">Registro</LinkI>
                <LinkI to="/Listar">Listado</LinkI>
                </Nav>
            </div>
            <hr/>
        </div>
    )
}
export default Navbar