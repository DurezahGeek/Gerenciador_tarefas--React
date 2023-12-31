import {BrowserRouter}from 'react-router-dom'
import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  return(
   <BrowserRouter>
    <ToastContainer autoClasse = {3000}/>
    <RoutesApp/>
   </BrowserRouter>
  )
}
