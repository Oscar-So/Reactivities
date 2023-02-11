import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { List, Item, Button } from 'semantic-ui-react';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

function App() {

  const [activities, setActivities] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5000/api/activities")
        .then(response => {
          setActivities(response.data);
        })

    }, [])

  return (
    <div>
      <Header as='h2' icon = 'users' content = 'reactivities' />
      <List>
        {activities.map((thing : any) => (
          <List.Item key = {thing.id}>
              {thing.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
