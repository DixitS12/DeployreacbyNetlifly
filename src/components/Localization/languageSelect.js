import React from 'react';
import i18next from "i18next";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage,setLangStatus } from "../../redux/actions/applicationData";
import { languages } from "./data.js";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LanguageSelect() {

  const dispatch = useDispatch();
  const langState = useSelector(state => state.applicationData.language);
  const languageStatusState = useSelector(state => state.applicationData.language_status);

  const classes = useStyles();

  const handleChange = (event) => {
    dispatch(setLanguage(event.target.value ? event.target.value : "en"));

    i18next.changeLanguage(event.target.value);

    dispatch(setLangStatus(true));


  };



  return (
    <div className="">
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={langState ? langState : "en"}
          onChange={handleChange}
        >

          {
            languages.length && languages.map((lang) => {
              return (
                <MenuItem value={lang.code}>{lang.name}</MenuItem>
              )
            })
          }


        </Select>
      </FormControl>

    </div>
  );
};

