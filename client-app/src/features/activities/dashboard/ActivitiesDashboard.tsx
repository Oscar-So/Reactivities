import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import Activity from '../../../app/models/activity';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import ActivityDetails from './details/ActivityDetails';


interface Props {
    activities : Activity[] 
    selectedActivity : Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    handleFormOpen : (id : string) => void;
    handleFormClose :  () => void;
    isEditMode: boolean;
    createOrEdit: (activity: Activity) => void;
    handleDeleteActivity: (id: string) => void;
    submitting: boolean;
}


export default function ActivityDashboard({submitting, handleDeleteActivity,createOrEdit,activities,selectedActivity,selectActivity,cancelSelectActivity,isEditMode,handleFormOpen,handleFormClose}: Props){

    return(
        <Grid>
            <Grid.Column width ='10'>
                <ActivityList 
                  activities={activities}
                  selectActivity={selectActivity}
                  handleDeleteActivity={handleDeleteActivity}
                  submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&
                <ActivityDetails handleFormOpen={handleFormOpen} activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/> }
                {isEditMode && 
                <ActivityForm 
                handleFormClose={handleFormClose} 
                createOrEdit={createOrEdit} 
                activity={selectedActivity}
                submitting= {submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}