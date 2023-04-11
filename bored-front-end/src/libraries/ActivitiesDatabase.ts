import Activity from "../models/Activity";
import MapsActivity from "../models/MapsActivity";
import GeneralActivity from "../models/GeneralActivity";
import { Tags } from "../models/Tags";

//NOTE: This is a placeholder DB for Development purposes
export let activityDB: Activity[] = [
    new MapsActivity("Swimming", "A fun exercise!", [Tags.Exercise], "swimming pool"),
    new GeneralActivity("Chess", "A challenging puzzle game", [Tags.Dexterity, Tags.Logic]),
    new GeneralActivity("Make Pizza!", "Learn to make this fancy new food from scratch!", [Tags.Cooking, Tags.Eating])
]