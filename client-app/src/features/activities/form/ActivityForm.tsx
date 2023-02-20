import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import Activity from '../../../app/models/activity';

interface props {
    activity: Activity | undefined;
    handleFormClose : () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, handleFormClose,createOrEdit}: props){

    const initalState = selectedActivity ?? {
        
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const[activity, setActivity] = useState<Activity>(initalState);

    function handleSubmit (){
        createOrEdit(activity);
    }

    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const{name, value} = event.target;
        setActivity({...activity, [name]:value})
    }

    return(
        <Segment clearing >
            <Form onSubmit= {() => handleSubmit()} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.Input placeholder='Description' value={activity.description} name='description'onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input placeholder='Date' value={activity.date} name='date'onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city'onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue'onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' content='Submit'onChange={handleInputChange}/>
                <Button floated='right'  type='button' onClick={() => handleFormClose()} content='cancel'/>
            </Form>
        </Segment>
    )
}