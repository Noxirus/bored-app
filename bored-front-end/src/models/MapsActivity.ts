import MapsActivityComponent from '../components/MapsActivityComponent';
import Activity from './Activity';
import { Tags } from './Tags';

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
