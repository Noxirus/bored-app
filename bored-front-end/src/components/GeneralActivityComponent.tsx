import GeneralActivity from '../models/activities/GeneralActivity';

function GeneralActivityComponent(props: GeneralActivity) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default GeneralActivityComponent;