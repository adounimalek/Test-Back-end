import react from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editproduct } from "../Redux/ProductSlice"; 

function Editproduct ({el, ping, setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    const [edited, setedited]=useState({
        name:el?.name,
        image:el?.image,
        price:el?.price,
        category:el?.category
    })
return(

    <>
      <Button variant="primary" onClick={handleShow}>
     Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder={el?.name} onChange={(e)=>setedited({...edited,name:e.target.value})}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder={el?.image} onChange={(e)=>setedited({...edited,image:e.target.value})} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" placeholder={el?.price} onChange={(e)=>setedited({...edited,price:e.target.value})} />
        
      </Form.Group>

      <Form.Select aria-label="Default select example" onChange={(e)=>setedited({...edited,category:e.target.value})}>
      <option>category</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
     
    </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editproduct({id:el?._id, edited}));handleClose(); alert("votre produit est bien modifié");setping(!ping)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}


export default Editproduct