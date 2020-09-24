
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo_copistas1.png";

export default class LogoImg extends React.Component {

  render() {
    return (
        <a href="/" className="navbar-brand" >
          <img src={logo} width="30" height="30"
               className="d-inline-block align-top" alt=""/>
            Libraille
        </a>

    );
  }
}

