import Activity from './Activity';
import { Tags } from './Tags';

class MapsActivity implements Activity {
    constructor(
        public name: string, 
        public description: string, 
        public tags: Tags[], 
        public mapsKeyword: string
    ){}
    
    render(): JSX.Element {
        throw new Error('Method not implemented.');
    }
}

export default MapsActivity;