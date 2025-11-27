import { useState, useEffect } from 'react'
import './App.module.css'
import { api } from './api/api'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get(`/character`).then((response) => {
      setData(response.data.results)
      console.log(response.data.results)
    }).catch((error) => {
      console.log("nao foi possivel", error)
    })
  }, [])

  return (
    <>
      <h1 className={api.tittle}>rick and morty characters</h1>
      <main>
        <input type="text" value={''} onChange={''} placeholder='1/42'/>
        <input type="text" value={''} onChange={''} placeholder='procure um personagem'/>
      </main>
    </>
  )
}

export default App
