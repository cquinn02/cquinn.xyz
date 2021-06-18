import * as React from "react";
import * as THREE from "three";
import Poppins from "./poppins.json";
import Coral from "./coral.jpg";


type Props = {
    text: string,
    size: number,
    height: number
};

const DepthText = ({ text, size, height }: Props): JSX.Element => {
    const font: THREE.Font = new THREE.FontLoader().parse(Poppins);
    const texture: THREE.Texture = new THREE.TextureLoader().load(Coral);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.2, 0.2);

    const textOptions = {
        font,
        size: size,
        height: height
    };

    return (
        <mesh position={[-5, 5, -10]} rotation={[0.6, 0.1, 0]} >
            <textGeometry attach="geometry" args={[text, textOptions]} />
            <meshBasicMaterial color={"#2d81cc"} />
        </mesh>
    );
}

export default DepthText;