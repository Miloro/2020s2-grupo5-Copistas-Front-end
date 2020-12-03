import React, {Fragment, useState} from "react";
import { Alert,Button, FormGroup, FormControl, Form } from "react-bootstrap";
import {login} from "./Api";
import "../css/Login.css";
import UsuarioContext from "./UsuarioContext"
import { useHistory } from "react-router-dom";
import logo from "../images/logo_copistas1.png";

export default function Login() {

    let history = useHistory();

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [estadoAlert, setEstadoAlert] = useState({
        show: false,
        estado: '',
        cuerpo: "",
        boton:''
    });

  
    function validateForm() {
      return nombreUsuario.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event,context) {
        event.preventDefault();
        login(nombreUsuario, password).then((user) => {
            context.iniciarSesion(user)
            history.push("/home")
        }).catch(e => setEstadoAlert({
            show: true,
            estado: 'danger',
            cuerpo: "usuario Incorrecto",
            boton: "outline-danger"
        }))

    }

    return (
        <UsuarioContext.Consumer>
            {context =>{
              return <Fragment> 
        <div class="container">
            <div class="row h-100 justify-content-center">
                
                <div className="Login">
                    
                <form onSubmit={event => {handleSubmit(event, context)}} >
                    <h2 id= "titulo" className= "font-weight-bold text-center mb-4">BIENVENIDO</h2>
                    <img src={logo} width="200" height="200" className="rounded-circle mx-auto d-block shadow mb-2 bg-white" alt=""/>
                    <Alert show={estadoAlert.show} variant={estadoAlert.estado}>
                        <p>
                            {estadoAlert.cuerpo}
                        </p>
                        <hr/>
                        <div className="d-flex justify-content-end">
                            <Button  onClick={() => setEstadoAlert({...estadoAlert, show: false})} variant={estadoAlert.boton}>
                                Cerrar
                            </Button>
                        </div>
                    </Alert>
                    <FormGroup controlId="nombreUsuario" bsSize="large">
                    <Form.Label>Usuario</Form.Label>
                    <FormControl
                        autoFocus
                        value={nombreUsuario}
                        onChange={e => setNombreUsuario(e.target.value)}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                    <Form.Label>Contraseña</Form.Label>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Iniciar sesion
                    </Button>
                </form>
                </div>
            </div>            
        </div>
        </Fragment>
        
        }
            
            }

        </UsuarioContext.Consumer>
    );
}
