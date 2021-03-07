import React from 'react';

const Navbar = ()=>(
    <nav className="navbar navbar-primary bg-dark justify-content-between">
        <a className="navbar-brand text-light">Search Users Github</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar Usuário" aria-label="Search" />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
    </nav>   
);

export default Navbar;