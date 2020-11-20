export default class Usuario {
    constructor( nombre, roles, tareas ) {
      this.nombre = nombre;
      this.rol = roles;
      this.tareasPendientes = tareas;
    }
  
    esAdministrador() {
      return this.rol.some(e => e.authority === "ROLE_ADMIN");
    };
  
    esColaborador() {
      return this.rol.some(e => e.authority === "ROLE_USER");
    }

    cantidadDeTareasPendientes(){
      return  this.tareasPendientes.length
    }
  };