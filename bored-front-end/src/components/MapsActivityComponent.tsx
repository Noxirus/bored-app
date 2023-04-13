import MapsActivity from '../models/activities/MapsActivity';

function MapsActivityComponent(props: MapsActivity) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.mapsKeyword}</p>
        </div>
    );
}

export default MapsActivityComponent;