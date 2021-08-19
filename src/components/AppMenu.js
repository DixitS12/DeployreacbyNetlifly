import List from "@material-ui/core/List";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import appMenuItems, { commonItems } from "../assets/menu_items";
import AppMenuItem from "./AppMenuItem";

const drawerWidth = 260;

const useStyles = makeStyles((theme) =>
    createStyles({
        appMenu: {
            width: "100%"
        },
        navList: {
            width: drawerWidth
        },
        menuItem: {
            width: drawerWidth
        },
        menuItemIcon: {
            color: "#97c05c"
        }
    })
);

const useStylesForAppMenuItem = makeStyles((theme) =>
    createStyles({
        appMenu: {
            width: "100%"
        },
        navList: {
            width: drawerWidth
        },
        menuItem: {
            width: drawerWidth
        },
        menuItemIcon: {
            color: "#62676d"
        },
        spanText: {
            fontWeight: "700"
        }
    })
);
export default function AppMenu() {
    const classes = useStyles();
    return (
        <List component="nav" className={'scrollbar ' + classes.appMenu} disablePadding>
            {/* <AppMenuItem {...appMenuItems[0]} /> */}

            {appMenuItems.map((item, index) => (
                <AppMenuItem {...item} key={index} useStyles={useStylesForAppMenuItem} />
            ))}
            <hr style={{ borderTop: "1px dashed ", color: "#636a7070", margin: "0.5rem" }} />
            {commonItems.map((item, index) => (
                <AppMenuItem {...item} key={index} useStyles={useStylesForAppMenuItem} />
            ))}
        </List>
    );
}