import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [email, setEmail] = useState('')             //initially empty state value
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {       
      setEmail(e.target.value)              //value set in state
  }

  const handlePassword = (e) => {
      setPassword(e.target.value)
  }

  const handleApi =() => {
    console.log({email, password})
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    })
    .then(result=>{                 //  executes when no error 
      console.log(result)
      alert('successful')
    })
    .catch(error=>{                  // executes when error  
      console.log(error)
      alert('error')
    })
  }

  return (
    <div className='App'>
      <label>Email : </label>
      <input type="text" value={email} onChange={handleEmail} /> <br />

      <label>Password : </label>
      <input type="password" value={password} onChange={handlePassword} /> <br />

      <button onClick={handleApi}>Login</button>
    </div>
  )
}

export default App
