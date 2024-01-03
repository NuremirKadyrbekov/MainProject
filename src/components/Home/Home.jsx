import React from 'react'
import Alina from '../Alina/Alina'
import Anatai from '../Anatai/Anatai'
import Ayat from '../Ayat/Ayat'
import Baimyrza from '../Baimyrza/Baimyrza'
import Elnura from '../Elnura/Elnura'
import Munara from '../Munara/Munara'

function Home () {
  return (
    <div>
        <Alina/>
        <Anatai/>
        <Ayat/>
        <Baimyrza/>
        <Elnura/>
        <Munara/>
        <button>Munara</button>
        <button>Ayat</button>
        <button>Elnura</button>
        <button>Baimyrza</button>
        <button>Anatai</button>
        <button>Alina</button>
    </div>
  )
}

export default Home