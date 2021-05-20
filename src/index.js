import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { Provider } from "./context/context"
import App from "./App";
import { SpeechProvider } from "@speechly/react-client"

ReactDOM.render(
    <SpeechProvider appId="e82be143-8a34-4216-885c-7dbf7a9a7929" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,

    document.getElementById("root"));