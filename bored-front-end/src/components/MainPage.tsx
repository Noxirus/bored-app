import { useState } from 'react';
import { Button } from 'reactstrap';
import Activity from '../models/Activity';
import activityService from '../services/activity-service';

function MainPage(): JSX.Element {
    const [currentActivity, setActivity] = useState<Activity | null>(null);

    function FindActivity(){
        let chosenActivity: Activity = activityService.FindActivity();

        setActivity(chosenActivity);
    }

    return (
        <div>
            <h1>I am bored!</h1>
            <Button>Give me something to do...?</Button>
        </div>
    );
}

export default MainPage;