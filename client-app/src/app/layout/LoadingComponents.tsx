import react from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';


interface Props {
    inverted?: boolean;
    content?: string; 

}

export default function loadingComponents({inverted = true, content= 'loading...'}: Props){
    return (
        <Dimmer active={true} inverted = {inverted}>
            <Loader content={content} />
        </Dimmer>
    )
}