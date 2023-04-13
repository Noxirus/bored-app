import { Tags } from "../Tags";


export default interface Activity {
    readonly name: string, 
    readonly description: string,
    tags: Tags[],

    render(): JSX.Element;
}