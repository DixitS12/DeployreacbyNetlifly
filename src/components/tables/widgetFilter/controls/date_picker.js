
import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyles from "../../styles";
export default function MaterialUIPickers(props) {

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  var classes = useStyles();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
         className={classes.mb_one}
          name={props.field.dataField}
          fullWidth={true}
          id={"date-picker-dialog_"+props.field.id}
          label={props.field.text}
          format="dd/mm/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}