console.log('App.js is running!');

// JSX = JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some additional info.</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var userName = 'Mike';
var userAge = 30;
var userLocation = 'Minneapolis';
var templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
