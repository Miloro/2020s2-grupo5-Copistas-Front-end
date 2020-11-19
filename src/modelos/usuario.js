export default class Usuario {
    constructor( nombre, roles ) {
      this.nombre = nombre;
      this.rol = roles;
    }
  
    esAdministrador() {
      return this.rol.some(e => e.authority === "ROLE_ADMIN");
    };
  
    esColaborador() {
        return this.rol.some(e => e.authority === "ROLE_USER");
    }
  };