import GeneralActivityComponent from '../components/GeneralActivityComponent';
import Activity from './Activity';
import { Tags } from './Tags';

class GeneralActivity implements Activity {
    constructor(
        public name: string, 
        public description: string, 
        public tags: Tags[]
    ){}
    
    render(): JSX.Element {
        return GeneralActivityComponent(this);
    }
}

export default GeneralActivity;