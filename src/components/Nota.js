import React, { Component } from 'react';
export default class Nota extends Component {
    state={
        idEliminar:"oíahehjiocgfglvfswjnvfdjlxgvjñvysvycmhlobkrhxtvwrxghlgbbhdxtzkgozjsfuoyoayufdkjhasdnvuañlaj",
        idEditar:"ahdiusHBDicuagsdlkaskgukjshdfjapśjxpfhvjaoshoyshdñfhfdylklñskjfghvfgxrxdcvuljnjgdxzhtddzfasnsdf",
        modificar:{
            id:this.props.id,
            titulo:this.props.titulo,
            descripcion:this.props.descripcion,
            fecha:this.props.fecha
        }
    }
    componentDidMount(){
       const val1=Math.round(Math.random()*60);
       const val2=Math.round(Math.random()*60);
        const prueb=this.state.idEditar;
        const prueb2=this.state.idEliminar;
        if(val1>val2){
            this.setState({
                idEditar:prueb.substr(val2,val1),
                idEliminar:prueb2.substr(val2,val1)
            })
            console.log(val2+" "+val1);
        }else{
            this.setState({
                idEditar:prueb.substr(val1,val2),
                idEliminar:prueb2.substr(val1,val2)
            })
            console.log(val1+" "+val2);
        }
    }
    //eliminar nota
    eliminarNota= async(e)=>{
        e.preventDefault();
        let data={
            id:this.props.id
        }
        console.log(data);
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json",
                "access-token":localStorage.getItem("access-token")
            },
            body:JSON.stringify(data)
        }
        const respuesta=await fetch("https://tusnotas.herokuapp.com/eliminar-nota",config);
        const res=await respuesta.text();
        if(!res){
            alert("no se pudo eliminar la nota")
        }else{
            alert(res);
            window.location.replace("https://tus-notass.herokuapp.com/")
        }
    
    }
    //modificar nota
    hendlerSubmitModificarNota= async(e)=>{
        e.preventDefault();
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json",
                "access-token":localStorage.getItem("access-token")
            },
            body:JSON.stringify(this.state.modificar)
        }
        const respuesta=await fetch("https://tusnotas.herokuapp.com/modificar-nota",config);
        const res=await respuesta.text();
        if(!res){
            alert("No se pudo modificar la nota")
        }else{
            alert(res)
            window.location.replace("https://tus-notass.herokuapp.com/")
        }
    
    }

    //hendler para sacar los datos de los input
    hendlerChangeModificarNota=(e)=>{
        e.preventDefault();
        this.setState({
            modificar:{...this.state.modificar,[e.target.name]:e.target.value}
        });
        console.log(this.state.modificar)
    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <p className="card-text">
                            {this.props.descripcion}
                        </p>
                    </div>
                    <div className="card-footer">
                        <h6>fecha: {this.props.fecha}</h6>
                    </div>
                    <div className="container d-flex flex-row flex-row-reverse">
                        {/* editar */}
                            <button type="button" style={{background:"#99A3A4"}} className="btn text-white" data-toggle="modal" data-target={`#${this.state.idEditar}`}>
                                Editar
                            </button>
                        {/* eliminar */}
                            <button type="button" className="btn text-white" style={{background:"#CB4335"}} data-toggle="modal" data-target={`#${this.state.idEliminar}`}>
                                Eliminar
                            </button>
                            {/* modal editar */}
                                <div className="modal fade" id={`${this.state.idEditar}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                    <input type="text" className="form-control" onChange={this.hendlerChangeModificarNota} name="titulo" placeholder={this.props.titulo}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" onChange={this.hendlerChangeModificarNota} name="descripcion" placeholder={this.props.descripcion}/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="date" className="form-control" onChange={this.hendlerChangeModificarNota} name="fecha" placeholder={this.props.fecha} required/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="button" onClick={this.hendlerSubmitModificarNota}  className="btn btn-primary">Modificar</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* modal eliminar */}
                                <div className="modal fade" id={`${this.state.idEliminar}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Eliminar Nota</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <p>esta seguro que desea eliminar esta nota?</p>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="button" onClick={this.eliminarNota} className="btn btn-primary">Eliminar</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>         
        )
    }
}
