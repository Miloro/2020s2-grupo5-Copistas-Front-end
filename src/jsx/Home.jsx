import React from 'react'
import { getLibros } from './Api'
import LogoImg from '../components/LogoImg';
import DataModal from './DataModal';



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            show: true,
            showData: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log(getLibros(this.state.value));
        this.showModal()
        //aqui deberia abrir el modal en vez de console log en pantalla
        event.preventDefault();
    }

    closeModal(){
        this.setState({
          show: false,
        });
    }

    showModal(){
        this.setState({
          show: true,
        });
      }

    render() {
        return (
        <>
            <LogoImg />
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                <input type="submit" value="Submit" />
                <DataModal message={this.state.value} show={this.state.show} closeModal={this.closeModal} />
            </form>
        </>
        );
    }
}