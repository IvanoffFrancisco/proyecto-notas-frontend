import React, { Component } from 'react'
import NavBar from '../components/NavBar';
export default class Inicio extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="jumbotron">
                    <h1 >Tus notas</h1>
                    <p className="lead">Agrega notas que te puedan servir para recordar luego!</p>
                </div>
                <h1 className="text-center">Ingrese al sistema para poder ver sus notas</h1>
            </div>
        )
    }
}
