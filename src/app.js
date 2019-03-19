console.log('App.js is running!');

// JSX = JavaScript XML
const app = {
    title: 'Indecisive Today?',
    subtitle: 'Give this a try!',
    options: [
        'One', 
        'Two',
        'Three'
    ]
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Sarah',
    age: 30,
    location: 'Minneapolis'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    };
};
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
