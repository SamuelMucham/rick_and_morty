import { useState, useEffect } from 'react'
import './App.module.css'
import {api} from './api/api'
import { Card } from './components/card'
import Tilt from 'react-parallax-tilt'
import Infomodal from './components/infomodal'

function App() {
  const [data, setData] = useState([])
  const[searchName, setSearchName] = useState("")
  const[searchPage, setSearchPage] = useState("")
  const[modal, setModal] = useState();

  useEffect(() => {
    api.get(`/character/?name=${searchName}&page=${searchPage}`).then((response) => {
      setData(response.data.results)
    }).catch((error) => {
      console.errror("nao foi possivel", error)
    })
  }, [searchPage,searchName])

  return (
    <>
    {modal !== undefined && <Infomodal data={data[modal]} close={() => setModal()}/>}
      <h1 className={api.title}>rick and morty characters</h1>
      <main>
        <div style={{display: "flex", gap: "30px", alignItems: "center", justifyContent: "center"}}>
        <input type="text" value={searchPage} onChange={(e) => setSearchPage(e.target.value)} placeholder='1/42'/>
        <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder='Procure um Persongem'/>
        </div>

        <div className={api.wrapcards}>
          {data.map((item, index)=>{
            return(
              
              <div key={index}>
                <Tilt>
                <Card image={item.image} name={item.name} species={item.species}/>  
                </Tilt>
                <button onClick={() => setModal(index)} className={api.infobtn}>info {item.name}</button>
                </div>
            )
          })}

        </div>
      </main>
    </>
  )
}

export default App
