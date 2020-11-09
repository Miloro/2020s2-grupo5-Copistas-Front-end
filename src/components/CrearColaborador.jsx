import React, {Fragment,useState} from "react"
import { Container } from "react-bootstrap";
import { Form,  Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import {crearColaborador} from "./Api"

export default function CrearColaborador({}){
    let history = useHistory();


    const [colaborador,setColaborador]= useState({
        nombre: "",
        nombreUsuario : "",
        email : "",
        password : "",
    })

    const [contraseñaRepetida, setRepetirContraseña]= useState("")

    const handleInputChange = (event) => {
        setColaborador({
            ...colaborador,
            [event.target.name]: event.target.value
        })
    }

    const handleRepetirContraseña = (event) => {
        setRepetirContraseña(event.target.value)
    }

    const crearUsuarioAdministrador = () => {
        crearColaborador(colaborador).then((res)=>{
            history.push("/home")
        })
        
    }


return(
    <Fragment>
        <NavBar/>
        <Container id="hojaderuta" >
            <h2>Crear Colaborador</h2>
            <Form noValidate>
                <Form.Row >
                    <label>Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange}
                     name="nombre"/>
                </Form.Row>
                <Form.Row >
                    <label>Nombre de Usuario</label>
                    <input type="text" placeholder="Nombre de Usuario" className="form-control" onChange={handleInputChange}
                     name="nombreUsuario"/>
                </Form.Row>
                <Form.Row >
                    <label>Email</label>
                    <input type="text" placeholder="Email" className="form-control" onChange={handleInputChange}
                     name="email"/>
                </Form.Row>
                <Form.Row >
                    <label>Contraseña</label>
                    <input type="text" placeholder="Contraseña" className="form-control" onChange={handleInputChange}
                     name="password"/>
                </Form.Row> 
                <Form.Row >
                    <label>Repetir Contraseña</label>
                    <input type="text" placeholder="Repetir Contraseña" className="form-control" onChange={handleRepetirContraseña}
                     name="passwordRepetido"/>
                </Form.Row>
                <Button className="mt-3" block bsSize="large" onClick= {crearUsuarioAdministrador}>
                    Crear Colaborador
                </Button>        
            </Form>
  
        </Container>
    </Fragment>
)
}