import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";

const app = (): JSX.Element => {
    return (
        <div className="app">
            <h1>Conor Quinn</h1>
        </div>
    );
}

ReactDOM.render(
    React.createElement(app), 
    document.getElementById("root")
);