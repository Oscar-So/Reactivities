import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponents from '../../../../app/layout/LoadingComponents';
import { useStore } from '../../../../app/stores/store';





export default observer(function ActivityDetails(){
    const {activityStore} = useStore();
    const{selectedActivity, loadActivity, loadingInitial} = activityStore;
    const{id} = useParams();

    useEffect(() => {
        if(id) loadActivity(id);
    }, [id,loadActivity])
   
    if (loadingInitial || !selectedActivity) return <LoadingComponents/>;    

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{selectedActivity.title}</Card.Header>
                <Card.Meta>
                    <span>{selectedActivity.date}</span>
                </Card.Meta>
                <Card.Description>{selectedActivity.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/manage/${selectedActivity.id}`} basic color='blue' content='Edit' />
                    <Button as={Link} to='/activities' basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})