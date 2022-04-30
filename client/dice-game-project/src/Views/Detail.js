import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import NavbarHome from '../Components/NavbarHome'
import {fetchProductId} from '../store/actionCreator';
import {useParams} from "react-router-dom"

function Detail() {
    const {id} = useParams()
    
    const { productId, productsLoading, productsError } = useSelector((state) => state.itemReducer);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductId(id));
    }, []);

   
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2>Detail</h2>
          </div>
          <div className="container-image">
            <h4> Game</h4>
            <p>{productId.name}</p>
          </div>
          <div className="container-image">
            <h4>Match</h4>
            <p>{productId.match}</p>
          </div>
          <div className="container-image">
            <h4> Win</h4>
            <p>{productId.win}</p>
          </div>
          <div className="container-image">
            <h4> Lose</h4>
            <p>{productId.lose}</p>
          </div>
          <div className="container-image">
            <h4> Score</h4>
            <p>{productId.score}</p>
          </div>

     

         
        </div>
      </div>
    </section>
  )

}

export default Detail; 