import React, {useEffect} from 'react'
import TableItem  from '../Components/TableItem '
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { fetchProducts } from '../store/actionCreator';


function Home (){
  const navigate = useNavigate()
  const { products} = useSelector((state) => state.itemReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  
  const addItem = () =>{
    navigate(`/additem`)
  }

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>DICE GAME</h2>
    <button onClick={() => {
            addItem()
          }} className="nav-button" >
            <p className="table-button-text">
              Add New Game
            </p>
          </button>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">Game</th>
          <th className="table-th">Match</th>
          <th className="table-th">Action</th>
          
        </tr>
        </thead>

    
        
   

      {products.map((product) =>(
                      <TableItem  key={product.id} product={product} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Home;
