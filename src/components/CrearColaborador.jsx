import React, {Fragment,useState} from "react"
import { Container } from "react-bootstrap";
import  { Alert, Form,  Button,InputGroup} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import {crearColaborador} from "./Api"

export default function CrearColaborador({}){

    let history = useHistory();


    const [validated, setValidated] = useState(false);

    const [colaborador,setColaborador]= useState({
        nombre: "",
        nombreUsuario : "",
        email : "",
        password : "",
    })

    const [estadoAlert, setEstadoAlert] = useState({
        show: false,
        estado: '',
        cuerpo: "",
        boton:''
    });

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

    const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (colaborador.password === contraseñaRepetida) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            crearColaborador(colaborador).then((res)=>{
                history.push("/home")
            }).catch(e => setEstadoAlert({
                show: true,
                estado: 'danger',
                cuerpo: e.response.data.mensaje,
                boton: "outline-danger"
            }));
        }
        setValidated(true);

      event.stopPropagation();
    }else{
        setEstadoAlert({
            show: true,
            estado: 'danger',
            cuerpo: "las contraseñas no coinciden",
            boton: "outline-danger"
          })
    }
  };


return(
    <Fragment>
        <NavBar/>

        <Container className="container-sm p-3" id="contenedorFormularioColaborador" >
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
            <h2>Crear Colaborador</h2>
            <Form autoComplete="off" noValidate validated={validated} onSubmit={handleSubmit}>

                <InputForm
                                    label="Nombre"
                                    name="nombre"
                                    value={colaborador.nombre}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                    />

                    <InputForm
                                    label="Nombre de Usuario"
                                    name="nombreUsuario"
                                    value={colaborador.nombreUsuario}
                                    onChange={handleInputChange}
                                    type="text"
                                    required
                    />

                    <InputForm
                                    label="Email"
                                    name="email"
                                    value={colaborador.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    required
                    />

                    <InputForm
                                    label="Contraseña"
                                    name="password"
                                    value={colaborador.password}
                                    onChange={handleInputChange}
                                    type="password"
                                    required

                    />

                    <InputForm
                                    label="Repetir Contraseña"
                                    
                                    name="passwordRepetido"
                                    value={contraseñaRepetida}
                                    onChange={handleRepetirContraseña}
                                    type="password"
                                    required

                    />

                <Button type="submit"  >
                    Crear Colaborador
                </Button>        
            </Form>
        </Container>
    </Fragment>
)
}

function InputForm({label, mensajeControlInvalid = "este parametro es obligatorio.", ...props}){
    return(
        <Form.Group >
            <Form.Label>{label}</Form.Label>
            <InputGroup className="error" >
                <Form.Control 
                AutoComplete="new-password"
                {...props}
                placeholder={label}
                aria-describedby="inputGroupPrepend"
                />
                <Form.Control.Feedback type="invalid">
                    {mensajeControlInvalid}
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
}