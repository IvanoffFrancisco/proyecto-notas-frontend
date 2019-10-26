import React from 'react'
import {Link} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <MDBIcon icon="book-open text-white" />
          <Link className="navbar-brand mx-2" href="/">Tus Notas</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#">Sing In<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link mx-3" href="#">Sing Up<span className="sr-only">(current)</span></Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}
