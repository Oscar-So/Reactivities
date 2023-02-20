import React from 'react';
import { Button, Item, List, Segment } from 'semantic-ui-react';
import Activity from '../../../app/models/activity';

interface Props {
    activities : Activity[] 
    selectActivity: (id: string) => void;
    handleDeleteActivity: (id: string) => void;

}

export default function ActivityList({activities,selectActivity,handleDeleteActivity}: Props ){

    return(
        <Segment>
               <Item.Group divided>
                {activities.map(activity => (
                    <Item key = {activity.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.date}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' onClick = {() => selectActivity((activity.id))} content='view' color='blue'/>
                            <Button floated='right' onClick = {() => handleDeleteActivity((activity.id))} content='delete' color='red'/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                ))}
               </Item.Group>
        </Segment>
    )
}