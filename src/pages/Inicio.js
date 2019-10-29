import React,{useState} from 'react'
import NavBar from '../components/NavBar';
import ListarNotas from '../components/ListarNotas';
import NavUsuario from '../components/NavUsuario';
import Agregar from '../images/agregar-archivo.png';
export default function Inicio(props) {
    let token=localStorage.getItem("access-token");
    const [registro,setRegistro]=useState({user:"",email:"",password:""});
    const [login,setLogin]=useState({email:"",password:""});
    
    // funcion del login
    const hendlerChangeLogin=(e)=>{
        const{name,value}=e.target;
        setLogin({...login,[name]:value});
    } 
    //funcion del registro
    const hendlerChangeRegistro=(e)=>{
        const{name,value}=e.target;
        setRegistro({...registro,[name]:value});
        console.log(registro);
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
        const respuesta=await fetch("http://localhost:4000/registro",config);
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
        const respuesta=await fetch("http://localhost:4000/login",config);
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

    const cerrarSesion=()=>{
      localStorage.clear();
      props.history.push("/")
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
                    <button className="border-0" style={{background:"#fff"}}><img src={Agregar} alt="asdasd"/></button>
                        <ListarNotas/>
                    </div>
            </div>
        )
    }
}
