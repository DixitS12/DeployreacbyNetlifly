import { AppBar, Avatar, Drawer, IconButton, List, Toolbar, Typography } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import clsx from "clsx";
import React from 'react';
import "../css/Common.css";
import useStyles from "../css/NavStyle";
import AppMenu from './AppMenu';
import PureBreadcrumbs from "./Breadcrumbs";
import NavRight from "./NavRight";
import { Link } from 'react-router-dom';
const Logo = require("../assets/images/contoso_logo_only.png");
const LogoWithName = require("../assets/images/contoso-logo-transparent.png");


export default function NavMenu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <header>
            < >
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            }) + " Common-click"}
                            style={{ backgroundColor: 'transparent', paddingLeft: '0' }}
                        >
                            <Typography>
                                <Link to="/">
                                    <Avatar style={{ backgroundColor: "transparent" }}>
                                        <img
                                            src={Logo}
                                            style={{ maxWidth: "100%" }}
                                            className="header-logo"
                                            alt="stemmons-logo"
                                        ></img>
                                    </Avatar>
                                </Link>

                            </Typography>
                            <ChevronRight />
                            {/*<Menu />*/}
                        </IconButton>

                        <PureBreadcrumbs />
                        {/*<ApplicationListDropdown/>*/}

                        <NavRight />
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    className={
                        "sidebar-nav " +
                        clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })
                    }
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar + " side-click"}>
                    <Link to="/">
                        <img
                            src={LogoWithName}
                            style={{ maxWidth: "70%", marginRight: "0.5rem" }}
                            className="header-logo"
                            alt="stemmons-logo"
                        ></img>
                         </Link>
                        {/*<h3>Contoso</h3>*/}
                        <div></div>
                        <IconButton className="Common-click" onClick={handleDrawerClose}>
                            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <List className="scrollbar sidebar-navigation-block">

                        <AppMenu />
                    </List>
                </Drawer>
            </>
        </header>
    );

}
