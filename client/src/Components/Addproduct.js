import react from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addproduct } from "../Redux/ProductSlice"; 

function Addproduct ({ping, setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    const [newproduct, setnewproduct]=useState({
        name:"",
        image:"",
        price:0,
        category:"all"
    })
return(

    <>
      <Button variant="primary" onClick={handleShow}>
       Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>setnewproduct({...newproduct,name:e.target.value})}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter product image" onChange={(e)=>setnewproduct({...newproduct,image:e.target.value})} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" placeholder="Enter product price" onChange={(e)=>setnewproduct({...newproduct,price:e.target.value})} />
        
      </Form.Group>

      <Form.Select aria-label="Default select example" onChange={(e)=>setnewproduct({...newproduct,category:e.target.value})}>
      <option>category</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
     
    </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addproduct(newproduct));handleClose(); alert("votre produit est bien enregistrée");setping(!ping)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}


export default Addproduct