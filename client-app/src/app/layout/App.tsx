import { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import Activity from '../models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import agent from '../api/agent';
import LoadingComponents from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  
  const {activityStore}= useStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
      activityStore.loadActivities();

    }, [activityStore])

    

    function handleDeleteActivity(id: string){
      setSubmitting(true);
      agent.Activities.delete(id).then(() => {
        setActivities([...activities.filter(x => x.id !== id)])
        setSubmitting(false);
      })
      
      
    }

   
    if(activityStore.loadingInitial) return <LoadingComponents content='loading app..'/>
 
    return (
    <Fragment>
      
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
