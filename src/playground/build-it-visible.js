// Visibility Toggle

// button to display 'hide details' and 'show details' appropriately

console.log('App.js is running!');

let visibility = false; 

const toggleVisibility = () => {
    visibility = !visibility; 
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Aloha, this means you're showing all the details.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
