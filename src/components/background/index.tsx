import * as React from "react";
import { Canvas } from "react-three-fiber";
import DepthText from "../depthtext";
import "./background.scss";


const Background = (): JSX.Element => {
    return (
        <Canvas 
            className="canvas"
            camera={{ position: [0, 0, 0] }}
        >
            <ambientLight intensity={0.5}></ambientLight>
            <pointLight intensity={1} position={[10, 10, 10]} />
            <DepthText 
                text={"Conor Quinn"}
                size={1}
                height={0.5}
            ></DepthText>
        </Canvas>
    );
}

export default Background;