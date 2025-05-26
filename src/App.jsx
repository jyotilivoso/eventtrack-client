
import './App.css'
import Header from './components/header'
import Header1 from './components/Header1'
import Footer from './components/Footer'
  import { ToastContainer } from 'react-toastify';
import Admin from './pages/Admin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookPage from './pages/BookPage'
import BookingForm from './pages/BookingForm'
import Login from './pages/Login'




function App() {
 
  return (
    <>
   <Router>
    <Header/>
     <Header1/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/dest' element={<BookPage/>}/>
      <Route path='/bookform' element={<BookingForm/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
     </Routes>
  <Footer/>
  <ToastContainer/>
   </Router>
    </>
  )
}

export default App
