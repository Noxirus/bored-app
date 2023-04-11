import Activity from './Activity';
import { Tags } from './Tags';

class GeneralActivity implements Activity {
    constructor(
        public name: string, 
        public description: string, 
        public tags: Tags[]
    ){}
    
    render(): JSX.Element {
        throw new Error('Method not implemented.');
    }
}

export default GeneralActivity;