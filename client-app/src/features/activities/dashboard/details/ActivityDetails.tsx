import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoadingComponents from '../../../../app/layout/LoadingComponents';
import { useStore } from '../../../../app/stores/store';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';
import ActivityDetailedHeader from './ActivityDetailHeader';





export default observer(function ActivityDetails(){
    const {activityStore} = useStore();
    const{selectedActivity, loadActivity, loadingInitial} = activityStore;
    const{id} = useParams();

    useEffect(() => {
        if(id) loadActivity(id);
    }, [id,loadActivity])
   
    if (loadingInitial || !selectedActivity) return <LoadingComponents/>;    

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={selectedActivity}/>
                <ActivityDetailedInfo activity={selectedActivity}/>
                <ActivityDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>                
                <ActivityDetailedSidebar/>
            </Grid.Column>
        </Grid>
    )
})