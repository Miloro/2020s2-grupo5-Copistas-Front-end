import React, {Fragment, useState} from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import {login} from "./Api";
import "../css/Login.css";
import UsuarioContext from "./UsuarioContext"
import { useHistory } from "react-router-dom";

export default function Login() {

    let history = useHistory();

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState();
  
    function validateForm() {
      return nombreUsuario.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event,context) {
        event.preventDefault();
        console.log(context)
        login(nombreUsuario, password).then((user) => {
            context.iniciarSesion(user)
            setUsuario(user);
            history.push("/home")
        }).catch(e => alert(e));

    }

    return (
        <UsuarioContext.Consumer>
            {context =>{
              return <Fragment> 
            <div class="container">
            <div class="row h-100 justify-content-center">
                <div className="Login">
                <form onSubmit={event => {handleSubmit(event, context)}} >
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
