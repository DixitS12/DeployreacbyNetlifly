import React from "react";
import { Typography } from "@material-ui/core";

export default function CommonTitle(props) {

  const { title,color,variant,dclass } = props;
  return (
    <Typography color={color ? color:'textSecondary'} className={dclass ? dclass:'card-title'} variant={variant? variant : 'subtitle2'}>  { title ? title : ''}</Typography>
  );
}

