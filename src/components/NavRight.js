import { Badge, IconButton, Menu, MenuItem, TextField, Typography } from '@material-ui/core';
import { NotificationsNone as NotificationsIcon, Person as AccountIcon, Search as SearchIcon } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import classNames from "classnames";
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelect from '../components/Localization/languageSelect';
import useStyles from "../css/NavStyle";
import CommonAvatar from "./Avatar";
import Settings from "./Settings";

export default function NavRight() {
    var classes = useStyles();
    const [isSearchOpen, setSearchOpen] = React.useState(false);
    var [isNotification, setNotificationMenu] = React.useState(null);
    const [peopleData, setPeopleData] = React.useState([]);
    var [profileMenu, setProfileMenu] = React.useState(null);
    const searchPeople = (e) => {
        console.lo(e);
    }
    const handleNavigationClick = (username) => {
        // dispatch(isUserNameSet(username));
        console.log(username);
    };

    return (
        <>
            <div className={classes.grow} />
           
            <div
                className={classNames(classes.search, {
                    [classes.searchFocused]: isSearchOpen,
                })}
            >
                <div
                    className={
                        "header-icon-search_" +
                        classNames(classes.searchIcon, {
                            [classes.searchIconOpened]: isSearchOpen,
                        })
                    }
                    onClick={() => setSearchOpen(!isSearchOpen)}
                >
                    <IconButton className={classes.headerMenuButton}>
                        <SearchIcon className={classes.headerIcon} />
                    </IconButton>
                </div>
                {/* <InputBase
          onInput={(event) => searchPeople(event.target.value)}
          placeholder="Search�"
        /> */}

                <div style={{ width: 300 }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        getOptionLabel={(option) => option.FullName}
                        options={peopleData}
                        renderOption={(option) => {
                            return (
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        handleNavigationClick(option.ShortUserName);
                                    }}
                                >
                                    ABC
                                </Link>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                style={{ marginTop: "6px" }}
                                {...params}
                                fullWidth={true}
                                loading={"true"}
                                loadingText={"Loading"}
                                blurOnSelect={true}
                                //onInput={(event) => searchPeople(event.target.value)}
                                InputProps={{
                                    ...params.InputProps,
                                    type: "search",
                                    disableUnderline: true,
                                }}
                            />
                        )}
                    />
                </div>
            </div>
            <Settings className={classes.headerIcon} />

            <IconButton
                className={classes.headerMenuButton}
            >
                <Badge
                    badgeContent={null}
                    color={"secondary"}
                >
                    <NotificationsIcon className={classes.headerIcon} />
                </Badge>
            </IconButton>

            <IconButton
                color="inherit"
                className={classes.headerMenuButton}
                onClick={(e) => setProfileMenu(e.currentTarget)}
            >
                <CommonAvatar name="Example" sizeClass={classes.avt_small} />
            </IconButton>

            <Menu
                id="profile-menu"
                open={profileMenu}
                anchorEl={profileMenu}
                onClose={() => setProfileMenu(null)}
                className={classes.headerMenu}
            >
                <div className={classes.profileMenuUser}>
                    <Typography variant="h6" weight="medium">
                        {"Stemmons User"}
                    </Typography>
                </div>
                <MenuItem
                    className={classNames(
                        classes.profileMenuItem,
                        classes.headerMenuItem
                    )}
                >
                 
                    <AccountIcon className={classes.profileMenuIcon} /> Profile
                </MenuItem>
                <MenuItem
                    className={classNames(
                        classes.profileMenuItem,
                        classes.headerMenuItem
                    )}
                >
                </MenuItem>
                <MenuItem
                    className={classNames(
                        classes.profileMenuItem,
                        classes.headerMenuItem
                    )}
                >
                 <LanguageSelect />
                </MenuItem>
                
            </Menu>

        </>
    )
}
