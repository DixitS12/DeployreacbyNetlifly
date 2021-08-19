import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Hidden from '@material-ui/core/Hidden';
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { useTranslation  } from "react-i18next";
const useStyles = makeStyles((theme) => ({
    root: {
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    }
}));

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

function PureBreadcrumbs(props) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Hidden only="xs">
        <div className={classes.root}>

            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >

                {
                    props.breadcrumbs.map(({ breadcrumb, match }, index) => 
                        index > 0 && <div className="bc" style={{"fontWeight":"700"}} key={match.url}>
                            <Link color="inherit" href={match.url || ""}>
                            { t(breadcrumb.props.children.split("-").join(" "))}
                            </Link>

                        </div>
                    )
                }
            </Breadcrumbs>
            </div>
        </Hidden>
    );
}
export default withBreadcrumbs()(PureBreadcrumbs);