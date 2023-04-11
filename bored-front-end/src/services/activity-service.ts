import { activityDB } from "../libraries/ActivitiesDatabase";
import Activity from "../models/Activity";
import { Tags } from "../models/Tags";

class ActivityService {
    public FindActivity(filteredTags?: Tags[]): Activity{
        return activityDB[0];
    }
}

export default new ActivityService();