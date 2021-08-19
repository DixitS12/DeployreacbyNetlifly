import classnames from "classnames";
import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from "../css/NavStyle";
import NavMenu from './NavMenu';
import SidePanel from './SidePanel/SidePanel';
import { useSelector } from 'react-redux';
export default function Layout(props) {
    const classes = useStyles();
    const application_status = useSelector(state => state.applicationData.application_status);
    return (

        <div className={classes.root}>
            <NavMenu />
            <Grid container>
                {
                    application_status ?

                        <Grid item xs={12} sm={6} lg={3} md={10}>
                            <SidePanel />
                        </Grid>
                        : null
                }
                <Grid item xs={12} sm={6} lg={application_status ? 9 : 12} md={10}>
                    <div className={classnames(classes.content)}>
                        <div className={classes.fakeToolbar} />
                        {props.children}
                    </div>
                </Grid>
            </Grid>
        </div>


    );

}
