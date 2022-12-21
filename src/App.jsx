import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'
import { Menu } from './components/Menu'
import { useState } from 'react'

function App() {
  const [menuVisibility, setMenuVisibility] = useState(true)

  return (
    <>
      <Canvas onClick={() => setMenuVisibility(false)}>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={0.5}></ambientLight>
        <Fpv setPause={(val) => setMenuVisibility(val)}></Fpv>
        <Physics>
          <Ground></Ground>
          <Player></Player>
          <Cubes></Cubes>
        </Physics>
      </Canvas>
      <TextureSelector></TextureSelector>
      <div className="pointer">+</div>
      {
        menuVisibility ? <Menu></Menu>: <></>
      }
    </>
  )
}

export default App
