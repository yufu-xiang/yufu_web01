import './App.scss';
import { observer } from "mobx-react-lite"
import Login from './pages/login'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
