import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { addProducts } from '../store/actionCreator'
import { useDispatch } from 'react-redux';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';


function AddItem() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [itemsForm, setItemsForm] = useState({
        name: '',
        match: '',
        win: '',
        lose:'',
        score:'',

  })
 let formData = new FormData
  const changeItemFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setItemsForm({
      ...itemsForm,
      [field]: value
    })
  }

  const addNewItem = () => {
    dispatch(addProducts(itemsForm))
    .then(() => {
      successAlert('Success add new item');
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
      if (err == 'Error: Bad Request') {
        errorAlert(err, 'Please input field data');
      } else {
        errorAlert(err, 'PLeease fill the blank');
      }
    });
  };

  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> New GAME</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        addNewItem()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">Game</label>
              <input className="input-name" name='name' value={itemsForm.name} onChange={changeItemFormInput} type="text" placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Match</label>
                <input className="input-name" type="text" name='match' value={itemsForm.match} onChange={changeItemFormInput} placeholder="Type Here"></input>

              
                <label className="label-name" htmlFor="">Win</label>
                <input className="input-name" type="text" name='win' value={itemsForm.win} onChange={changeItemFormInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Lose</label>
                <input className="input-name" type="text" name='lose' value={itemsForm.lose} onChange={changeItemFormInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Score</label>
                <input className="input-name" type="text" name='score' value={itemsForm.score} onChange={changeItemFormInput} placeholder="Type Here"></input>

              </div>
              <div className="form-button">

                  <button className="table-button1" type="submit"> <p className="table-button-text">
                    Save
                  </p> </button>
                </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default AddItem; 