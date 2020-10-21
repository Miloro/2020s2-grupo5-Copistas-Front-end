import React, {Fragment, useState} from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";

import "../css/Login.css";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
        <Fragment>
            <div class="container">
                <div class="row h-100 justify-content-center">
                    <div className="Login">
                    <form onSubmit={handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                        <Form.Label>Usuario</Form.Label>
                        <FormControl
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
    );
}
