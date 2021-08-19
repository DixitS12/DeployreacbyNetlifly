import {
    Avatar, Link, ListItemIcon,
    ListItemText, MenuItem
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { responseContent } from "../assets/applists.json";
import useStyles from "../assets/css/common_styles";


//Styles
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
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function ApplicationListDropdown(props) {
    const classes = useStyles();
    const [applicationListData, setapplicationListData] = React.useState(responseContent);
    const [appName, setAppName] = React.useState(responseContent[24].name);
    const [appId, setAppId] = React.useState(0);
    

    const [open, setOpen] = React.useState(false);

    const handleClickList = (appId, appName, overrideUrl) => {
        handleCloseAnchor();
        setAppName(appName);
        setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickAnchor = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAnchor = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {appName ? (
                <div className="top-app-drp-list">
                    

                    <Link color="inherit" onClick={handleClickAnchor}>
                        {appName}
                    </Link>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleCloseAnchor}
                    >
                        {applicationListData.length
                            ? applicationListData.map((application) => (
                                <StyledMenuItem
                                    key={application.id}
                                    onClick={() =>
                                        handleClickList(
                                            application.id,
                                            application.name,
                                            application.overrideUrl
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
                                </StyledMenuItem>
                            ))
                            : []}
                    </StyledMenu>
                </div>
            ) : (
                    <div>
                        <Skeleton className={classes.skeletonWidth} />
                    </div>
                )}
        </>
    );
}

export default ApplicationListDropdown;
