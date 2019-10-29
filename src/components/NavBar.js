import React from 'react'
import {Link} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';
export default function NavBar(props) {
    const {hendlerChangeRegistro,hendlerChangeLogin,hendlerSubmitLogin,hendlerSubmitRegistro}=props;
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
              <button type="button" className="btn btn-black px-3 py-2 rounded-pill" data-toggle="modal" data-target="#SingIn">
                Iniciar Sesión
              </button>
              </li>
              <li className="nav-item ">
              <button type="button" className="btn btn-black px-3 py-2 rounded-pill" data-toggle="modal" data-target="#SingUp">
                Regístrate
              </button>
              </li>
            </ul>
            <div>
                {/* Modal Sing In */}
                <div className="modal fade" id="SingIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Iniciar Sesión</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* formulario */}
                        <form>
                          <div className="form-group">
                            <input type="email" onChange={hendlerChangeLogin} name="email" className="form-control" placeholder="Email" required/>
                          </div>
                          <div className="form-group">
                            <input type="password" onChange={hendlerChangeLogin} name="password" className="form-control" placeholder="Contraseña" required/>
                          </div>
                          <div className="mt-4 d-flex flex-row flex-row-reverse">
                          <button type="button" onClick={hendlerSubmitLogin} className="btn btn-primary" data-dismiss="modal">Ingresar</button>  
                          <button type="button" className="btn text-white" style={{background:"#A4A4A4"}} data-dismiss="modal">Cancelar</button>
                        </div>
                        </form>
                      </div>
                      <div className="container">
                        <div className="d-flex flex-column">
                          <h3 className="text-center">¿No esta Registrado?</h3>
                          <button type="button" className="btn btn-primary px-3 py-2 rounded-pill" data-toggle="modal" data-target="#SingUp" data-dismiss="modal">
                            Regístrate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

             {/* Modal Regístrate */}
             <div className="modal fade" id="SingUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Regístrate</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* formulario */}
                        <form>
                          <div className="form-group">
                            <label>Usuario<small className="text-danger">*</small></label>
                            <input type="text" onChange={hendlerChangeRegistro} name="user" className="form-control" required/>
                          </div>
                          <div className="form-group">
                          <label>Email<small className="text-danger">*</small></label>
                            <input type="email" onChange={hendlerChangeRegistro} name="email" className="form-control" required/>
                          </div>
                          <div className="form-group">
                          <label>Contraseña<small className="text-danger">*</small></label>
                            <input type="password" onChange={hendlerChangeRegistro} name="password" className="form-control" required/>
                          </div>  
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn text-white"  style={{background:"#A4A4A4"}} data-dismiss="modal">Cancelar</button>
                        <button type="button" onClick={hendlerSubmitRegistro} className="btn btn-primary" data-dismiss="modal">Regístrate</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </nav>
    )
}
