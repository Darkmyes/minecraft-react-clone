import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function FPV (props) {
    const {camera, gl} = useThree()

    return (
        <PointerLockControls
            args={[camera, gl.domElement]}
            onUnlock={() => props.setPause(true)}
        >
        </PointerLockControls>
    )
}