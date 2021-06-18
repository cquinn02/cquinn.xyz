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
    const font = new THREE.FontLoader().parse(Poppins);
    const texture = new THREE.TextureLoader().load(Coral);
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(0.1, 0.1);

    const textOptions = {
        font,
        size: size,
        height: height
    };

    return (
        <mesh>
            <textGeometry attach='geometry' args={[text, textOptions]} />
            <meshStandardMaterial attach='material' />
        </mesh>
    );
}

export default DepthText;