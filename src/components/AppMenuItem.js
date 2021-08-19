import { Link, MenuItem, Typography, IconExpandMore } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from "@material-ui/core/Menu";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Close from '@material-ui/icons/Close';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { responseContent } from "../assets/applists.json";
import "../css/Common.css";
import { useTranslation } from "react-i18next";
import { getSubApp, setApplicationDrpStatus } from "../redux/actions/applicationData";
import AppMenuItemComponent from './AppMenuItemComponent';
import ExpandMoreSharp from '@material-ui/icons/ExpandMoreSharp';
//import ExpandMoreSharp from '@material-ui/icons/ArrowDropDown';





const drawerWidth = 260;

const useStylesChildren = makeStyles((theme) =>
    createStyles({
        appMenu: {
            width: "100%"
        },
        navList: {
            width: drawerWidth
        },
        menuItem: {
            width: drawerWidth,
            color: "#FFF"
        },
        menuItemIcon: {
            color: "#FFF"
        },
        spanText: {
            fontWeight: "inherit"
        }
    })
);

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .scrollbar & .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


export default function AppMenuItem(props) {
    const { t } = useTranslation();
    const { menuName, menuPath, menuIcon, items = [], useStyles, applist } = props
    const classes = useStyles()
    const isExpandable = items && items.length > 0
    const [open, setOpen] = React.useState(false);
    const [applicationListData, setapplicationListData] = React.useState(responseContent);
    const [applicationIcon, setApplicationIcon] = React.useState(responseContent[24].imageBase64);
    //const [appName, setAppName] = React.useState(responseContent[24].name);
    const [appName, setAppName] = React.useState("Applications");
    const [appId, setAppId] = React.useState(0);
    const [search, setSearch] = React.useState("");
    const dispatch = useDispatch();
    const [childApp, setChildApp] = React.useState(items);
    const subApp = useSelector(state => state.applicationData.subApp);
    React.useEffect(() => {
        setChildApp(subApp);
    }, [subApp])

    const handleClickList = (appId, appName, imageBase64) => {
        setOpen(true);
        handleCloseAnchor();
        setAppName(appName);
        setAnchorEl(null);
        setApplicationIcon(imageBase64);
        const id = Math.floor(Math.random() * (1 - 8) + 8);
        dispatch(getSubApp(id));
        dispatch(setApplicationDrpStatus(true));
    };

    const handleClickListClear = (imageBase64) => {
        //setOpen(true);
        //handleCloseAnchor();
        setOpen(false);
        setAppName("Applications");
        dispatch(setApplicationDrpStatus(false));
        setAnchorEl(null);
        setApplicationIcon(imageBase64);
        //handleClickAnchor();
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickAnchor = (event) => {
        setAnchorEl(event.currentTarget);
        
    };

    const handleCloseAnchor = () => {
        setAnchorEl(null);
      
    };

    const filteredUsers = React.useMemo(() => {
        if (search) {
            return applicationListData.filter(
                (item) =>
                    item.name.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
            );
        }
        return applicationListData;
    }, [search]);

    function handleClick() {
        setOpen(!open)
    }

    function handleClickCancle() {
        setOpen(!open);
        setAppName("Applications");
        dispatch(setApplicationDrpStatus(false));
    }
    
    const MenuItemRoot = (
        <AppMenuItemComponent className={'' + classes.menuItem} link={menuPath} >
            {/* Display an menuIcon if any */}
            {!!menuIcon &&
                applist ? (
                    <>
                        {/*<ListItemIcon className={classes.menuItemIcon} onClick={handleClick}>*/}
                        <ListItemIcon className={classes.menuItemIcon} >
                            {/*{menuIcon}*/}
                            <Avatar
                                className="top-app-drp-list"
                                variant="rounded"
                                fontSize="small"
                                src={`data:image/jpeg;base64,${applicationIcon}`}
                            />
                        </ListItemIcon>
                        <ListItemText className="underline" primary={<span className={"overflow-text " + classes.spanText} >{appName}</span>} inset={!menuIcon} onClick={handleClickAnchor} /></>) : (<><ListItemIcon className={classes.menuItemIcon} onClick={handleClick}>
                        {/*<ListItemText className="underline" primary={<Tooltip title={appName}><span className="overflow-text">{appName}</span></Tooltip>} inset={!menuIcon} onClick={handleClickAnchor} /></>) : (<><ListItemIcon className={classes.menuItemIcon} onClick={handleClick}>*/}
                            {menuIcon}
                            {/*/>*/}
                        </ListItemIcon>
                    <ListItemText primary={<span className={"overflow-text " + classes.spanText} >{t(menuName)}</span>} inset={!menuIcon} /></>)

            }
            {/*<ListItemText className="underline" primary={menuName} inset={!menuIcon} onClick={handleClickAnchor}/>*/}
            {/* Display the expand menu if the item has children */}
            {isExpandable && !open && <ExpandMoreSharp onClick={handleClickAnchor} />}
            {isExpandable && open && <Close style={{ color: "#ff0000" }} onClick={handleClickCancle} />}
        </AppMenuItemComponent>
    )

    const ApplistMenu = (
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseAnchor}
        >

            {/*<Button variant="outlined" size="large" >Default</Button>*/}
            <input type="text" placeholder="Search" className="search-input" style={{ "width": '92%', 'margin': '1rem', 'marginTop': '.5rem', "textAlign": 'center' }} onChange={(e) => setSearch(e.target.value)}/>
      {/*      <Typography variant="h5" style={{ 'fontWeight': '700', 'marginLeft': '1rem' }} gutterBottom>*/}
      {/*          Everythings*/}
      {/*</Typography>*/}

            <Link
                style={{ paddingLeft: "1rem", paddingBottom: "0.35em" }}
                className="Link-app-list"
                onClick={() =>
                    handleClickListClear(
                        "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"
                    )
                }
            >
                <ListItemIcon>
                    <Close style={{ color: "#ff0000", fontStyle: "italic" }} />
                </ListItemIcon>
                <ListItemText primary={<span style={{ fontWeight: "700", fontSize: "larger" }}>Clear Applications</span>} />
            </Link>
            {filteredUsers.length
                ? (filteredUsers && filteredUsers.map((application) => (
                    <Link
                        key={application.id}
                        style={{ paddingLeft: "1rem", paddingBottom: "0.35em" }}
                        className="Link-app-list"
                        onClick={() =>
                            handleClickList(
                                application.id,
                                application.name,
                                application.imageBase64
                            )
                        }
                        selected={appId === application.id}
                    >
                        <ListItemIcon>
                            <Avatar
                                className="top-app-drp-list"
                                variant="rounded"
                                fontSize="small"
                                src={`data:image/jpeg;base64,${application.imageBase64}`}
                            />
                        </ListItemIcon>
                        <ListItemText primary={application.name} />
                    </Link>
                )))
                : []}
        </StyledMenu>
    )

    const MenuItemChildren = isExpandable ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider />
            <List style={{ background: "#747474"}} component="div" disablePadding >
                {childApp.map((item, index) => (
                    <AppMenuItem {...item} key={index} useStyles={useStylesChildren} />
                ))}
            </List>
        </Collapse>
    ) : null

    return (
        <>
            {MenuItemRoot}
            {ApplistMenu}
            {MenuItemChildren}
        </>
    );
}