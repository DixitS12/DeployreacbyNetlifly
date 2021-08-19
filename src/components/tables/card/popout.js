import React from "react";
import Link from '@material-ui/core/Link';
import { Launch } from '@material-ui/icons';
export default function CommonPopout(props) {

  const { link } = props;
  return (
    <Link target="_blank" href="https://home.boxerproperty.com/App/71001/login" >   <Launch /> </Link>
  );
}

