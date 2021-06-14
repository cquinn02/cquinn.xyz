import * as React from "react";
import * as ReactDOM from "react-dom";

const app = (): JSX.Element => {
    return (
        <div>
            <h1>bing bong</h1>
        </div>
    );
}

ReactDOM.render(
    React.createElement(app), 
    document.getElementById("root")
);