import React,{useEffect,useState} from 'react'
import Nota from './Nota'
export default function ListarNotas(props) {

    const [data,setData]=useState([]);

    //llamada a las notas
    useEffect(()=>{
        const llamadaApi=async ()=>{
         try {
             let config={
                 method:"GET",
                 headers:{
                     "access-token":localStorage.getItem("access-token")
                 }
             }
             const respuesta=await fetch("https://tusnotas.herokuapp.com/notas",config);
             const res=await respuesta.json();
             setData(res);
             
         } catch (error) {
         }
         }
         llamadaApi();
     },[]);
    
    return (
        <div className="row">
        {
            data.map((datos)=>{
                return(
                <Nota key={datos._id} id={datos._id} titulo={datos.titulo} descripcion={datos.descripcion} fecha={datos.fecha}/>
                )
            })
        }
        </div>
    )
}

