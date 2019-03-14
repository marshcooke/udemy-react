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

// create a templateTwo var JSX expression
// root div
// h1 tag -> Sarah Cooke
// p tag -> age: 30
// p tag -> location: Mpls, MN
// render templateTwo instead of template
var templateTwo = (
    <div>
        <h1>Sarah Cooke</h1>
        <p>Age: 30</p>
        <p>Location: Minneapolis, MN</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
