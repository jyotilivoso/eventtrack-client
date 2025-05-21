
import './App.css'
import Header from './components/header'
import Header1 from './components/Header1'
import Footer from './components/Footer'

import Admin from './pages/Admin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookPage from './pages/BookPage'
import BookingForm from './pages/BookingForm'




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
     </Routes>
  <Footer/>
   </Router>
    </>
  )
}

export default App
