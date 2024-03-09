import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './copmonents/Landing'
import Questions from './copmonents/Questions'


function App() {

  return (
    <>
   <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/questions' element={<Questions/>}/>
      

  </Routes>
    </>
  )
}

export default App
