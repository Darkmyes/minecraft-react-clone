import grassTextureImg from './grass.jpg'
import glassTextureImg from './glass.png'
import logTextureImg from './log.jpg'
import dirtTextureImg from './dirt.jpg'
import woodTextureImg from './wood.png'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const groundTexture = new TextureLoader().load(grassTextureImg)
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

const grassTexture = new TextureLoader().load(grassTextureImg)
grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.magFilter = NearestFilter

const glassTexture = new TextureLoader().load(glassTextureImg)
glassTexture.wrapS = RepeatWrapping
glassTexture.wrapT = RepeatWrapping
glassTexture.magFilter = NearestFilter

const logTexture = new TextureLoader().load(logTextureImg)
logTexture.wrapS = RepeatWrapping
logTexture.wrapT = RepeatWrapping
logTexture.magFilter = NearestFilter

const dirtTexture = new TextureLoader().load(dirtTextureImg)
dirtTexture.wrapS = RepeatWrapping
dirtTexture.wrapT = RepeatWrapping
dirtTexture.magFilter = NearestFilter

const woodTexture = new TextureLoader().load(woodTextureImg)
woodTexture.wrapS = RepeatWrapping
woodTexture.wrapT = RepeatWrapping
woodTexture.magFilter = NearestFilter

export {
    groundTexture,
    grassTexture,
    glassTexture,
    logTexture,
    dirtTexture,
    woodTexture,
}