import React,{useState} from 'react'
import NavBar from '../components/NavBar';
import ListarNotas from '../components/ListarNotas';
import NavUsuario from '../components/NavUsuario';
import Agregar from '../images/agregar-archivo.png';
export default function Inicio(props) {
    let token=localStorage.getItem("access-token");
    
    const [registro,setRegistro]=useState({user:"",email:"",password:""});
    const [login,setLogin]=useState({email:"",password:""});
    const [nota,setNota]=useState({titulo:"",descripcion:"",fecha:""});


    // funcion del login
    const hendlerChangeLogin=(e)=>{
        const{name,value}=e.target;
        setLogin({...login,[name]:value});
    } 
    //funcion del registro
    const hendlerChangeRegistro=(e)=>{
        const{name,value}=e.target;
        setRegistro({...registro,[name]:value});
    }
    //funcion de nueva nota
    const hendlerNuevaNota=(e)=>{
        const {name,value}=e.target;
        setNota({...nota,[name]:value});
    }

    //submit del registro
    const hendlerSubmitRegistro=async (e)=>{
        e.preventDefault();
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(registro)
        }
        const respuesta=await fetch("https://tusnotas.herokuapp.com/registro",config);
        const res=await respuesta.text();
        if(!res){
            alert("No se pudo registrar el usuario, por favor vuelva a intentarlos")
            props.history.push("/")
        }else{
            alert(res);
            props.history.push("/")
        }
    }

    //submit del login
    const hendlerSubmitLogin=async (e)=>{
        e.preventDefault();
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(login)
        }
        const respuesta=await fetch("https://tusnotas.herokuapp.com/login",config);
        const res=await respuesta.json();
        if(res.advertencia){
            alert("Usuario y/o contraseña incorrecta");
            props.history.push("/");
        }else{
            const{token,user,id}=res;
            localStorage.setItem("access-token",token);
            localStorage.setItem("user",user);
            localStorage.setItem("id",id);
            props.history.push("/");
        }
    }

    //cerrar sesion
    const cerrarSesion=()=>{
      localStorage.clear();
      props.history.push("/")
    }
    //nueva nota
    const hendlerSubmitNuevaNota=async (e)=>{
        e.preventDefault();
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json",
                "access-token":localStorage.getItem("access-token")
            },
            body:JSON.stringify(nota)
        }
        const respuesta=await fetch("https://tusnotas.herokuapp.com/nueva-nota",config);
        const res=await respuesta.text();
        if(!res){
            alert("no se pudo guardar la nota");
        }else{
            alert("Se guardo la nota");
            window.location.replace("https://tus-notass.herokuapp.com/")
            
        }
    }

    if(!token){
        return (
            <div>
                    <NavBar hendlerSubmitRegistro={hendlerSubmitRegistro} hendlerChangeRegistro={hendlerChangeRegistro} hendlerChangeLogin={hendlerChangeLogin} hendlerSubmitLogin={hendlerSubmitLogin}/>
                    <div className="jumbotron">
                        <h1 >Tus notas</h1>
                        <p className="lead">Agrega notas que te puedan servir luego!</p>
                    </div>
                    <h1 className="text-center">Ingrese al sistema para poder ver sus notas!</h1>
            </div>
        )
    }else{
        return (
            <div>
                    <NavUsuario user={localStorage.getItem("user")} cerrarSesion={cerrarSesion}/>
                    <div className="jumbotron">
                        <h1 >Tus notas</h1>
                        <p className="lead">Agrega notas que te puedan servir luego!</p>
                    </div>
                    <h1 className="text-center">Notas de {localStorage.getItem("user")}</h1>
                    
                    <div className="container">
                    <button type="button" className="border-0" style={{background:"#fff"}} data-toggle="modal" data-target="#nuevanota">
                        <img src={Agregar} alt="asdasd"/>
                    </button>
                        <ListarNotas/>
                    </div>
                    <div className="modal fade" id="nuevanota" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        {/* modal nueva nota */}
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agrgar una Nueva Nota</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" onChange={hendlerNuevaNota} className="form-control" name="titulo" placeholder="titulo" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={hendlerNuevaNota} className="form-control" name="descripcion" placeholder="Descripción" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" onChange={hendlerNuevaNota} className="form-control" name="fecha" required/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" onClick={hendlerSubmitNuevaNota} className="btn btn-primary" data-dismiss="modal">Agregar</button>
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
        )
    }
}
