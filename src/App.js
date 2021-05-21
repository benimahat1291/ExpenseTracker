
import React from 'react'
import Details from './components/details/Details'
import Main from './components/main/Main'
import "./App.css"
import {ErrorPanel, PushToTalkButton, PushToTalkButtonContainer} from "@speechly/react-ui"

const App = () => {

    return (

        <div className="expenseTracker">
            <div className="expenseTracker__gird">
                <div className="expenceTracker__main">
                    <Main/>
                </div>
                {/* <div>
                    <Details title="Income" />
                </div>
                <div>
                    <Details title="Expense"/>
                </div> */}
            </div>
            <PushToTalkButtonContainer>
                <PushToTalkButton/>
                <ErrorPanel/>
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App
