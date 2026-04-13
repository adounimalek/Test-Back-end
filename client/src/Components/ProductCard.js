import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteproducts } from '../Redux/ProductSlice';
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2'
import Editproduct from './Editproduct';

function ProductCard({el, ping, setping}) {
  const dispatch=useDispatch();
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el?.image} />
      <Card.Body>
        <Card.Title>{el?.name} {el?.price}</Card.Title>
        <Card.Text>
         {el?.category}
        </Card.Text>
        <Button
  variant="primary"
  onClick={() => {
    dispatch(deleteproducts(el?._id));
    setping(!ping);
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) Swal.fire("Saved!", "", "success");
      else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
    });
  }}
>
  Delete
</Button>

<Editproduct el={el} ping={ping} setping={setping} />

      </Card.Body>
    </Card>
  );
}

export default ProductCard;