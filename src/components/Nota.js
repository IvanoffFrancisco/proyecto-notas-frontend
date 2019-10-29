import React from 'react'
export default function Nota(props) {
 
    return (
        <div className="col-sm-4">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">
                        {props.descripcion}
                    </p>
                </div>
                <div className="card-footer">
                    <h6>fecha: {props.fecha}</h6>
                </div>
                <div className="container d-flex flex-row flex-row-reverse">
                        {/* editar */}
                        <button type="button" style={{background:"#99A3A4"}} className="btn text-white" data-toggle="modal" data-target="#editar">
                            Editar
                        </button>
                        {/* eliminar */}
                        <button type="button" className="btn text-white" style={{background:"#CB4335"}} data-toggle="modal" data-target="#eliminar">
                            Eliminar
                        </button>
                        <div>
                                {/* modal eliminar */}
                            <div className="modal fade" id="eliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Eliminar Nota</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        ¿Esta seguro que quiere eliminar esta Nota?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Eliminar</button>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            {/* modal editar */}
                            <div className="modal fade" id="editar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Nota</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="titulo" placeholder="Titulo"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="descripcion" placeholder="Descripcion"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                        <button type="button" className="btn btn-primary">Modificar</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
        </div>         
    );
}
