import { useBox } from "@react-three/cannon"
import { useState } from "react"
import { useStore } from "../hooks/useStore.js"
import * as textures from '../textures/textures.js'

export const Cube = ({id, position, texture}) => {
    const [isHovered, setIsHovered] = useState(false)

    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const [removeCube] = useStore(state => [state.removeCube])

    const activeTexture = textures[texture + 'Texture']

    return (
        <mesh 
            onPointerMove={(e) => {
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setIsHovered(false)
            }}
            onClick={(e) => {
                e.stopPropagation()
                if (e.nativeEvent.button === 0) {
                    removeCube(id)
                }
            }}
            ref={ref}
        >
            <boxBufferGeometry attach='geometry'></boxBufferGeometry>
            <meshStandardMaterial
                map={activeTexture}
                attach='material'
                color={isHovered ? 'grey' : 'white'}
                transparent
            ></meshStandardMaterial>
        </mesh>
    )
}