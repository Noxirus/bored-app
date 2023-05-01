import EventActivityComponent from '../../components/EventActivityComponent';
import Activity from './Activity';
import { Tags } from '../Tags';

class EventActivity implements Activity {
    constructor(
        public name: string, 
        public description: string, 
        public tags: Tags[], 
        public eventKeyword: string
    ){}
    
    public render(): JSX.Element {
        return EventActivityComponent(this);
    }
}

export default EventActivity;