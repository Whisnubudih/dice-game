import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {productDeleteSucces} from '../store/actionCreator'

function TableItem ({product}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()


const deleteItemHandler = (id) =>{
  console.log(id)
    fetch(`http://localhost:10000/game/${id}`, {
        method: 'DELETE',  
        headers: {
          access_token: localStorage.getItem('access_token')
        }, 
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success delete');
        dispatch(productDeleteSucces(id))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
const editItemHandler = (id) =>{
  navigate(`/edititem/${id}`)
}

const detailItemHandler = (id) =>{
  navigate(`/detail/${id}`)
}
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{product.name}</td>
        <td  className="table-td">{product.match}</td>
       
        
        <td className="table-td1">
          <button onClick={() => {
            editItemHandler(product.id)
          }} className="table-button1" >
            <p className="table-button-text">
              Edit
            </p>
          </button>
          <button onClick={() => {
            deleteItemHandler(product.id)
          }} className="table-button2" >
            <p className="table-button-text">
              Delete
            </p>
          </button>
          <button onClick={() => {
            detailItemHandler(product.id)
          }} className="table-button3" >
            <p className="table-button-text">
              Detail
            </p>
          </button>
          </td>
      </tr>
    </tbody>
  )
   
}

  export default  TableItem ;  