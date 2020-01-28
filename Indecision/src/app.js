class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        );
    }
}


class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Indecision App</h1>
                <h3>Leave your life in the hands of a computer</h3>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>Do something</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <h5>Options components here....</h5>
                <Option/>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <h5>Option component</h5>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))