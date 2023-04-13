import { activityDB } from "../libraries/ActivitiesDatabase";
import Activity from "../models/activities/Activity";
import { Tags } from "../models/Tags";

class ActivityService {
    public FindActivity(filteredTags?: Tags[]): Activity{
        let randomChoice: number = Math.floor(Math.random() * activityDB.length);
        return activityDB[randomChoice];
    }
}

export default new ActivityService();