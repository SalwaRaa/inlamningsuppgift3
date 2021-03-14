import React from "react";
import { CreateProfile } from './create';
import { ViewProfile } from './profile';

export class StartPage extends React.Component {

    state = { currentPage: "start", selectedDog: "", dogs: [] }

    deleteDog(dogs) {
        var temp = this.state.dogs;
        temp = temp.filter(e => e !== dogs);
        this.setState({ dogs: temp });
    }

    componentDidMount() {
        var allDogs = JSON.parse(localStorage.getItem('dogs'));
        if (allDogs) {
            this.setState({
                dogs: allDogs
            });
        }
    }
    switchDogs(dog) {
        this.setState(prevState => ({ ...prevState, currentPage: "selectedProfile", selectedDog: dog }))
    }

    switchPath(event) {
        event.preventDefault()
        this.setState({ currentPage: "create" })
    }

    getStartPage = () => {
        return <div>
            <h4>Dogbook</h4>
            <br />
            <br />
            <h3>Users</h3>
            {this.state.dogs && this.state.dogs.map(dog => <span className="dog-list" onClick={() => this.switchDogs(dog)}>@{dog.name}</span>)}
            <br />
            <a href="" onClick={(e) => this.switchPath(e)}> Create new dog </a>
        </div>
    }

    getPage() {
        switch (this.state.currentPage) {
            case "start": return this.getStartPage()
            case "create": return <CreateProfile goBack={() => this.switchPath} />
            case "selectedProfile": return <ViewProfile dog={this.state.selectedDog} goBack={() => this.switchPath} goToDog={() => this.switchDogs} />
            default: return this.getStartPage()
        }
    }

    render() {

        return this.getPage()
    }
}