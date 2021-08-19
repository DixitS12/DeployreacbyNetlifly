import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
    root: {
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    }
}));

function PureBreadcrumbs(props) {
    const classes = useStyles();
    const { t } = useTranslation();

    console.log(":----props.breadcrumbs",props.breadcrumbs);
    return (
        <div className={classes.root}>

            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >

                {
                    props.breadcrumbs.map(({ breadcrumb, match }, index) => (
                        <div className="bc" key={match.url}>
                            <Link color="inherit" href={match.url || ""}>
                                {breadcrumb}
                                
                            </Link>

                        </div>
                    ))
                }
            </Breadcrumbs>
        </div>
    );
}
export default withBreadcrumbs()(PureBreadcrumbs);