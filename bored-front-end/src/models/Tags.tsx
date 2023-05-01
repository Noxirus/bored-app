import { FormGroup, Input, Label } from 'reactstrap';

export enum Tags {
    Exercise,
    Dexterity,
    Logic,
    Cooking,
    Eating,
    Travelling,
}


export function DisplayTags(tag: Tags, checkedTags: Tags[], setCheckedTags: (arg1: Tags[]) => void): JSX.Element | null {
    const tagAsNumber = parseInt(tag as unknown as string, 10);
    if(!isNaN(tagAsNumber)) return null;
        
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

const handleCheckboxChange = (tag: Tags, checkedTags: Tags[], setCheckedTags: (arg1: Tags[]) => void) => {
    if (checkedTags.includes(tag)) {
      setCheckedTags(checkedTags.filter(item => item !== tag));
    } else {
      setCheckedTags([...checkedTags, tag]);
    }
  };

//These are general, will need to narrow down most likely
//Idea may be good to have a list of tags for a theme of a particular acitivty, EX: cooking food, there is a list of various country foods that get randomly chosen