import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../../styles";


export default function CustomTextField(props) {
    var classes = useStyles();
    var required = props.field.required;
    return (
        <TextField
            name={String(props.field.dataField)}
            id={String(props.field.id ? props.field.id : 0)}
            label={props.field.text ? props.field.text : 'label'}
            required={false}
            fullWidth={true}
            type={props.field.type ? props.field.type : 'text'}
            placeholder={props.field.label}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            className={classes.mb_one}
        />

    );
}