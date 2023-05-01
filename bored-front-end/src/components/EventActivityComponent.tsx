import EventActivity from '../models/activities/EventActivity';

function EventActivityComponent(props: EventActivity): JSX.Element {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.eventKeyword}</p>
        </div>
    );
}

export default EventActivityComponent;