import React, {useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyles from "./styles"
import Form from './form/Form';
import List from './list/List';
import {ExpenseTrackerContext} from "../../context/context" 

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent> 
            <Typography align="center" variant="h5">{`Net Balance:  $${balance}`}</Typography>
            <Typography variant="subtitle1" style={{lineHeight: "1.5em", marginTop: "20px"}}>
                Try saying "Add income for $100 in category salary from monday..."
            </Typography>
            <Divider/>
            <Form/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
