import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Activity from '../models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponents from './LoadingComponents';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
      agent.Activities.list().then(response => {
          let activities: Activity[] = [];
          response.forEach(activity => {
            activity.date = activity.date.split('T')[0];
            activities.push(activity);
          })
          setActivities(response);
          setLoading(false);
        })

    }, [])

    function handleSelectActivity(id: string) {
      setSelectedActivity(activities.find(x => x.id === id))
    }

    function handleCancelSelectActivity(){
        setSelectedActivity(undefined);
    }

    function handleFormOpen(id? : string) {
      id ? handleSelectActivity(id) : handleCancelSelectActivity()
      setEditMode(true)
    }

    function handleFormClose() {
      setEditMode(false)
    }

    function handleCreateOrEditActivity(activity: Activity){
      setSubmitting(true);
      if (activity.id){
        agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter( x => x.id !== activity.id), activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
        })
      } else {
        activity.id = uuid();
        agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
      }
    }

    function handleDeleteActivity(id: string){
      setSubmitting(true);
      agent.Activities.delete(id).then(() => {
        setActivities([...activities.filter(x => x.id !== id)])
        setSubmitting(false);
      })
      
      
    }

   
    if(loading) return <LoadingComponents content='loading app..'/>
 
    return (
    <Fragment>
      
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          isEditMode = {editMode}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          handleFormOpen = {handleFormOpen}
          handleFormClose = {handleFormClose}
          createOrEdit = {handleCreateOrEditActivity}
          handleDeleteActivity = {handleDeleteActivity}
          submitting = {submitting}
        />
      </Container>
    </Fragment>
  );
}

export default App;
