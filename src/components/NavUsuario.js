import React from 'react'
import {Link} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';
export default function NavUsuario(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <MDBIcon icon="book-open text-white" />
          <Link className="navbar-brand mx-2" to="/">Tus Notas</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button type="button" onClick={props.cerrarSesion} className="btn btn-black px-3 py-2 rounded-pill">
                  Cerrar Sesión
                </button>
              </li>
            </ul>
            </div>
        </nav>
    )
}
