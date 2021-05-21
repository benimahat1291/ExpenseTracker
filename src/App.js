
import React from 'react'
import Details from './components/details/Details'
import Main from './components/main/Main'
import "./App.css"
import List from './components/main/list/List'


const App = () => {

    return (

        <div className="expenseTracker">
                <div className="expenceTracker__main">
                    <Main />
                </div>
    
                <div className="expenceTracker__charts">
                    <div className="expenceTracker__income">
                        <Details title="Income" />
                    </div>
                    <div className="expenceTracker__list">
                        <List/>
                    </div>
                    <div className="expenceTracker__expence">
                        <Details title="Expense" />
                    </div>
                </div>
        </div>
    )
}

export default App
