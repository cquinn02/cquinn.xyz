import * as React from "react";
import * as ReactDOM from "react-dom";
import Background from "./components/background";

const app = (): JSX.Element => {
    return (
        <div className="app">
            <Background></Background>
        </div>
    );
}

ReactDOM.render(
    React.createElement(app), 
    document.getElementById("root")
);