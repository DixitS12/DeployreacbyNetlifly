import React, { useState } from "react";
import {
    FormControl,
    Select,
    InputLabel,
    MenuItem

} from "@material-ui/core";
import useStyles from "../../styles";


export default function CustomSelect(props) {
    const [drpValue, setDrpValue] = useState("");
    var classes = useStyles();

    const handleChange = (e) => {
        setDrpValue(e);
    }
    return (
        <FormControl
            fullWidth={true}
            variant="outlined"
            className={classes.mb_one}
        >
            <InputLabel id="demo-controlled-open-select-label">
                {props.field.text ? props.field.text : 'Select'}
            </InputLabel>
            <Select
                className="input-dropdown"
                name={props.field.name}
                label={props.field.text}
                value={drpValue}
                onChange={(e) =>
                    handleChange(e.target.value)
                }
            >
               {
                  props.field.control_value.length > 0
                  ?

                   props.field.control_value.map((option,index)=>(
                    <MenuItem value={option.value} id={index}>{option.text}</MenuItem>
                   ))
                   :
                   null
               }

            </Select>
        </FormControl>

    );
}