import React from "react";
import SnackBar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import useStyles from "./styles"

const SnackbarComponent = ({open, setOpen}) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if(reason === "clickaway") return;
        setOpen(false);
        
    }
    return (
        <div ClassName={classes.root}>
            <SnackBar
            anchorOrigin={{vertical:"top", horizontal:"right"}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Transaction Successfull
                </MuiAlert>
            </SnackBar>
        </div>
    )
}

export default SnackbarComponent
