import { useState } from 'react';
import { Button, Container, Row, Form } from 'reactstrap';
import Activity from '../models/activities/Activity';
import activityService from '../services/activity-service';
import styled from 'styled-components';
import { Tags } from '../models/Tags';
import { DisplayTags } from '../models/Tags';

const MainPage: React.FC = () => {
    const [currentActivity, setActivity] = useState<Activity | null>(null);
    const [checkedTags, setCheckedTags] = useState<string[]>([]);

    function FindActivity(){
        let chosenActivity: Activity = activityService.FindActivity();
        setActivity(chosenActivity);
    }

    function BackToMainPage(){
        setActivity(null);
    }

    function FindActivitySection(){
        return currentActivity && 
        <div> 
            {currentActivity.render()}
            <Button onClick={() => BackToMainPage()}>Go back</Button>
        </div>
    }

    function ActivitySection(){
        return !currentActivity && 
        <div>
            <h1>I am bored!</h1>
            <Button onClick={() => FindActivity()}>Give me something to do...?</Button>
            <br /><br />
            <Form>
                {Object.keys(Tags).map(tag => DisplayTags(tag, checkedTags, setCheckedTags))}
            </Form>
        </div>
    }

    return (
        <MainPageContainer>
            <StyledRow>
                {FindActivitySection()}
                {ActivitySection()}        
            </StyledRow>
        </MainPageContainer>
    );
}

export default MainPage;

const MainPageContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    text-align: center;
`

const StyledRow = styled(Row)`
    border-width: 2px;
    border-style: solid;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 10px 10px lightblue;
`