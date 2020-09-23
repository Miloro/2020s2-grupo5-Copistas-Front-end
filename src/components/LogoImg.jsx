import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo_copistas1.png";




export default class LogoImg extends React.Component {
  constructor(props) {
    super(props);
  };
  
    render() {
      return(
          
                  <img src={logo} class="img-rounded" alt="Cinque Terre" className="logo" />                
            
      );
      }
  }