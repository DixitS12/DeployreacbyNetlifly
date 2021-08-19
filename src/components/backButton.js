import React from 'react';
import { useHistory } from "react-router-dom";
import { NavigateBefore } from '@material-ui/icons';
import {
    IconButton,
  } from "@material-ui/core";
export default function BackButton(props) {
    let history = useHistory();
    return (
        <div className="btn-back" style={{'display':'flex','cursor':'pointer'}}>
                <NavigateBefore   onClick={() => history.push(props.page)}/> Back
        </div>
    )
}