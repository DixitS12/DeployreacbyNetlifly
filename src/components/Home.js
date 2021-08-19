import React, { Component } from 'react';
import CenteredGrid from './MainComponent';
import { useSelector } from 'react-redux';

export default function Home() {

  const application_status = useSelector(state => state.applicationData.application_status);

  return (

    <div>
     <CenteredGrid/>
    </div>


  );
}
