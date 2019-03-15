console.log('App.js is running!');

// JSX = JavaScript XML
var appObject = {
    title: 'Indecisive Today?',
    subtitle: 'Give this a try!'
};
var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Sarah',
    age: 30,
    location: 'Minneapolis'
};
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
