import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link for="/">
                <img className="logo" src={Logo} alt="Aluraflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;
