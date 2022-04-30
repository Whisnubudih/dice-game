import './App.css'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectRoute';

import Login from './Views/Login.js'
import Register from './Views/Register';
import Home from './Views/Home'

import AddItem from './Views/AddItem';
import EditItem from './Views/EditItem';
import Detail from './Views/Detail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
        <Route path="/additem" element={
          <ProtectedRoute>
            <AddItem />
          </ProtectedRoute>
        } />
         <Route path="/edititem/:id" element={
          <ProtectedRoute>
            <EditItem />
          </ProtectedRoute>
        } />
          <Route path="/detail/:id" element={
          <ProtectedRoute>
            <Detail />
          </ProtectedRoute>
        } />
      </Routes>

    </div>
  )
}

export default App;
