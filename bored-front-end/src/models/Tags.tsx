import { FormGroup, Input, Label } from 'reactstrap';

export enum Tags {
    Exercise,
    Dexterity,
    Logic,
    Cooking,
    Eating,
    Travelling,
}


export function DisplayTags(tag: string, checkedTags: string[], setCheckedTags: (arg1: string[]) => void): JSX.Element | null {
    const tagValue = Tags[tag as keyof typeof Tags]
    if(typeof tagValue !== 'string'){
        return <FormGroup check key={tag} inline>
            <Label check>
                <Input
                    type="checkbox"
                    name="tags"
                    checked={checkedTags.includes(tag)}
                    onChange={() => handleCheckboxChange(tag, checkedTags, setCheckedTags)} />
                {tag}
            </Label>
        </FormGroup>
    }

    return null;
}

const handleCheckboxChange = (tag: string, checkedTags: string[], setCheckedTags: (arg1: string[]) => void) => {
    if (checkedTags.includes(tag)) {
      setCheckedTags(checkedTags.filter(item => item !== tag));
    } else {
      setCheckedTags([...checkedTags, tag]);
    }
  };

//These are general, will need to narrow down most likely
//Idea may be good to have a list of tags for a theme of a particular acitivty, EX: cooking food, there is a list of various country foods that get randomly chosen