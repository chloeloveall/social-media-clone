import React from 'react';
import { Modal, Button, InputGroup, FormControl, Icon } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Status() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text className='tweet-height tweet-color'>
        <Button className='replace-primary' onClick={() => setModalShow(true)}>
        Tweet
        </Button>
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="What's happening?"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
        className='tweet-height'
      />
    </InputGroup>
      

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
