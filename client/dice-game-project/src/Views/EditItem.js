import  { useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import {fetchProductId} from '../store/actionCreator';


function EditItem() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const [editItemForm, setEditItemForm] = useState({
       name:"",
       match: '',
       win: '',
       lose:'',
       score:'',

      

  })

  const changeEditItemInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setEditItemForm({
      ...editItemForm,
      [field]: value
    })
  }
  const {id} = useParams()
  const { productId, productsLoading, productsError } = useSelector((state) => state.itemReducer);
  
     useEffect(() =>{
    dispatch(fetchProductId(id))
    },[])

    const EditNewItem = () =>{
        fetch(`http://localhost:10000/game/${id}`, {
            method: 'PUT', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
           access_token: localStorage.getItem('access_token')
         },
         body: JSON.stringify(editItemForm),
       })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
         setEditItemForm(productId)
 
         navigate('/')
       })
       .catch((error) => {
           console.error('Error:', error);
         });
     }
     
     useEffect(() => {
      setEditItemForm(productId)
     },[productId])
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> EDIT ITEM</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        EditNewItem()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">Game</label>
              <input className="input-name"  name='name' value={editItemForm.name} onChange={changeEditItemInput} type="text"/>

              <label className="label-name" htmlFor="">Match</label>
              <input className="input-name"  name='match' value={editItemForm.match} onChange={changeEditItemInput} type="text"/>

              <label className="label-name" htmlFor="">Win</label>
              <input className="input-name"  name='win' value={editItemForm.win} onChange={changeEditItemInput} type="text"/>

              <label className="label-name" htmlFor="">Lose</label>
              <input className="input-name"  name='lose' value={editItemForm.lose} onChange={changeEditItemInput} type="text"/>

              <label className="label-name" htmlFor="">Score</label>
              <input className="input-name"  name='score' value={editItemForm.score} onChange={changeEditItemInput} type="text"/>
              


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

export default EditItem; 