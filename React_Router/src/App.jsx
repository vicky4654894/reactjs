import { Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import './App.css';
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
