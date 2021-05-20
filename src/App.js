import { Grid } from '@material-ui/core'
import React from 'react'
import Details from './components/details/Details'
import Main from './components/main/Main'
import useStyles from "./styles"
import {ErrorPanel, PushToTalkButton, PushToTalkButtonContainer} from "@speechly/react-ui"

const App = () => {
    const classes= useStyles();
    return (

        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" style={{ height: "80vh" }}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense"/>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton/>
                <ErrorPanel/>
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App
