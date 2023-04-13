import { useState } from 'react';
import { Button, Container, Row, Form, FormGroup, Input, Label } from 'reactstrap';
import Activity from '../models/activities/Activity';
import activityService from '../services/activity-service';
import styled from 'styled-components';
import { Tags } from '../models/Tags';

const MainPage: React.FC = () => {
    const [currentActivity, setActivity] = useState<Activity | null>(null);
    const [checkedTags, setCheckedTags] = useState<string[]>([]);

    function FindActivity(){
        let chosenActivity: Activity = activityService.FindActivity();
        setActivity(chosenActivity);
    }

    function DisplayListElement(tag: string): JSX.Element | null {
        const tagValue = Tags[tag as keyof typeof Tags];
        if(typeof tagValue !== 'string'){
            return <FormGroup check key={tag} inline>
                <Label check>
                    <Input
                        type="checkbox"
                        name="tags"
                        checked={checkedTags.includes(tag)}
                        onChange={() => handleCheckboxChange(tag)} />
                    {tag}
                </Label>
            </FormGroup>
        }

        return null;
    }

    const handleCheckboxChange = (tag: string) => {
        console.log("Checked: " + tag)
        if (checkedTags.includes(tag)) {
          setCheckedTags(checkedTags.filter(item => item !== tag));
        } else {
          setCheckedTags([...checkedTags, tag]);
        }
      };

    return (
        <MainPageContainer>
            <Row>
                {currentActivity && currentActivity.render()}
                {!currentActivity && <div>
                    <h1>I am bored!</h1>
                    <Button onClick={() => FindActivity()}>Give me something to do...?</Button>
                    <Form>
                        {Object.keys(Tags).map(tag => DisplayListElement(tag))}
                    </Form>

                </div>}
            </Row>
        </MainPageContainer>
    );
}

export default MainPage;

const MainPageContainer = styled(Container)`
text-align: center;
bottom: 0;
`