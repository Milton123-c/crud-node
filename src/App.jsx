import {useState} from 'react'
import FormUser  from './components/FormUser';
import './App.css';
import Home  from './components/Home';
import Navbar from './components/Navbar';

function App() {
 
    const [showForm, setShowForm] = useState(false)
    const [setUpdate, setSetUpdate] = useState(false)



  return (
    <section> 
        
       

        <Navbar setShowForm={setShowForm} showForm={showForm} />
        <Home setShowForm={setShowForm} setSetUpdate={setSetUpdate} />
        <FormUser setUpdate={setUpdate} setSetUpdate={setSetUpdate} setShowForm={setShowForm} showForm={showForm} />
       
    </section>
  )
}

export default App
