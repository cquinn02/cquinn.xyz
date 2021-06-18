import * as React from "react";
import { Canvas } from "react-three-fiber";
import DepthText from "../depthtext";



const Background = (): JSX.Element => {
    return (
        <Canvas>
            <ambientLight/>
            <pointLight position={[10, 10, 10]} />
            <DepthText 
                text={"Conor Quinn"}
                size={1}
                height={1}
            ></DepthText>
        </Canvas>
    );
}

export default Background;