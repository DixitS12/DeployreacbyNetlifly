import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LineGraph from './LineGraph';
import SidePanel from './SidePanel/SidePanel';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#edeef2',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={12}>
                    <Paper className={classes.paper}><LineGraph/></Paper>
                </Grid>
                {/*<Grid item xs={6}>*/}
                {/*    <Paper className={classes.paper}>xs=6</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={6}>*/}
                {/*    <Paper className={classes.paper}>xs=6</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    );
}
