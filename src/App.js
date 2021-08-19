import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import LoadTask from './components/task';
import Main from './components/MainComponent';
import i18next from "i18next";
import './custom.css'

import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from "./redux/actions/applicationData";
import { languages } from "./components/Localization/data.js";

export default function App() {

  const dispatch = useDispatch();
  const languageStatusState = useSelector(state => state.applicationData.language_status);

// for language load  dont remove this 
  React.useEffect(() => {
    var userLang = navigator.language || navigator.userLanguage
    var localStorageLng = localStorage.getItem("i18nextLng");
    if (!languageStatusState && localStorageLng !== undefined && userLang !== undefined && (localStorageLng !== userLang)) {

      if (languages.filter(item => item.code == userLang).length > 0) {
        dispatch(setLanguage(userLang));
        i18next.changeLanguage(userLang);
      }
    } else {
      dispatch(setLanguage(localStorage.getItem("i18nextLng") || "en"));
    }
  }, [navigator.language || navigator.userLanguage]);

  
// end for language load 

  return (
    <Layout>
      <Route exact path='/' component={Main} />
      <Route path='/counter' component={Counter} />
      <Route path="/inside_sales/tasks" component={LoadTask} />
      <Route path='/fetch-data' component={FetchData} />
      <Route path='/chart' component={Main} />
    </Layout>
  );
}
