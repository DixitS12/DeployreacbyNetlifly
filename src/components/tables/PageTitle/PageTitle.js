import React from "react";
import {
  Typography
} from "@material-ui/core";
// styles
import useStyles from "./styles";
import { useTranslation } from 'react-i18next';
export default function PageTitle(props) {
  const { t } = useTranslation();
  var classes = useStyles();

  return (
    
    <div className={classes.pageTitleContainer+' page-conteiner'}>
      <Typography className={classes.typo} variant={props.variant ? props.variant : 'h5'} size="sm">
      {t(props.title)}
      </Typography>
      {props.button && props.button}
    </div>
  );
}
