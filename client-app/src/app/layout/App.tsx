import { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import Activity from '../models/activity';
import NavBar from './Navbar';
import agent from '../api/agent';
import LoadingComponents from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router';
import HomePage from '../../features/home/HomePage';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  

   
 
    return (
    <Fragment>
      {location.pathname === '/' ? <HomePage/> : (
        <>
         <NavBar />
          <Container style={{marginTop: '7em'}}>
        <Outlet />
        </Container>
        </>
      )} 
     
    </Fragment>
  );
}

export default observer(App);
