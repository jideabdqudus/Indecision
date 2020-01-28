console.log("App.js is running fine");

//JSX - JAvascript XML

const app={
    title: 'Indecision App',
    subTitle: 'This is the first project',
    options: ['One', 'Two']
};
const template =(
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? "Here are your ptions" : "No options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user ={ 
    name: 'Qudus',
    age: 32,
    location: 'Lagos'
};

const templateTwo =(
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

let count = 0
const plusOne = () =>{
    console.log (count++)
    renderCounterApp();
};



const appRoot = document.getElementById('app');

const renderCounterApp = () =>{
    const templateThree = (  
        <div>
            <h3>Count {count}</h3>
            <button onClick={plusOne}>+1</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
}

renderCounterApp();

//ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);