import MapsActivityComponent from '../../components/MapsActivityComponent';
import Activity from './Activity';
import { Tags } from '../Tags';

//Wonder if this should also be an interface, and then we can make classes comprised of various interfaces
//That way I can have an eventbrite/google maps activity?
class MapsActivity implements Activity {
    constructor(
        public name: string, 
        public description: string, 
        public tags: Tags[], 
        public mapsKeyword: string
    ){}
    
    public render(): JSX.Element {
        return MapsActivityComponent(this);
    }
}

export default MapsActivity;
