import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponents from '../../../../app/layout/LoadingComponents';
import { useStore } from '../../../../app/stores/store';





export default function ActivityDetails(){
    const {activityStore} = useStore();
    const{selectedActivity, openForm, cancelSelectedActivity} = activityStore;

   
    if (!selectedActivity) return <LoadingComponents/>;    
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
                    <Button basic color='blue' content='Edit' onClick={() =>  activityStore.openForm(selectedActivity.id)}/>
                    <Button basic color='grey' onClick= {() => activityStore.cancelSelectedActivity()} content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}