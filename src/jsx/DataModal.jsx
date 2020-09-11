import React from 'react';
import { Modal,  ModalBody, ModalFooter, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default function DataModal(props) {
  return (
    <Modal show={props.show}>
        <ModalBody>aca deberia mostrar data del libro: ! {props.message} </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={props.closeModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      );
    }