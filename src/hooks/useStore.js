import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create( set =>({
    texture: 'dirt',
    cubes: [
    ],
    addCube: (x, y, z) => {
        set( state => {
            if (
                !(state.texture === 'dirt'
                || state.texture === 'grass'
                || state.texture === 'glass'
                || state.texture === 'wood'
                || state.texture === 'log')
            ) {
                return {
                    cubes: [...state.cubes, {
                        id: nanoid(),
                        texture: "dirt",
                        pos: [x, y, z]
                    }]
                }
            }

            return {
                cubes: [...state.cubes, {
                    id: nanoid(),
                    texture: state.texture,
                    pos: [x, y, z]
                }]
            }
        } )
    },
    removeCube: (id) => {
        set( state => ({
            cubes: state.cubes.filter(cube => cube.id !== id)
        }) )
    },
    setTexture: (texture) => {
        set( () => ({ texture }) )
    },
    saveWorld: () => {},
    resetWorld: () => {},
}))

