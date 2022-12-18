import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import * as imgs from '../textures/images.js'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [texture, setTexture] = useStore(store => [store.texture, store.setTexture])

    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = useKeyboard()

    const textureImgs = {
        dirtImg: imgs.dirtImg,
        grassImg: imgs.grassImg,
        glassImg: imgs.glassImg,
        woodImg: imgs.woodImg,
        logImg: imgs.logImg,
    }

    useEffect( () => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)

        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }

    }, [texture])

    useEffect( () => {
        const options = {
            dirt,
            grass,
            glass,
            wood,
            log
        }

        const selectedTexture = Object.entries(options)
            .find(([texture, isEnabled]) => isEnabled) ??
            texture

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

    }, [dirt, grass, glass, wood, log])

    if (!visible) return null

    return (
        <div className="texture-selector">
            {
                Object.entries(textureImgs).map(([imgKey, img]) => {
                    return (
                        <img
                            className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        />
                    )
                })
            }
        </div>
    )
}