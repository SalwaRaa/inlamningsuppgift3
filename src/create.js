import React from 'react'


export class CreateProfile extends React.Component {
    state = {
        name: "",
        nick: "",
        age: 0,
        bio: '',
        friends: [],
        dogs: [],
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var allDogs = JSON.parse(localStorage.getItem('dogs'));
        if (allDogs) {
            this.setState({
                dogs: allDogs
            });
        }
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    OnSave = (e) => {
        e.preventDefault();
        console.log(this.state);
        var allDogs = this.state.dogs;
        if (this.state.dogs.length > 0) {
            allDogs.push({
                name: this.state.name,
                nick: this.state.nick,
                age: this.state.age,
                bio: this.state.bio,
                friends: this.state.friends
            });
        }
        else {
            //skapar en 1 första hund
            allDogs.push({
                name: this.state.name,
                nick: this.state.nick,
                age: this.state.age,
                bio: this.state.bio,
                friends: this.state.friends
            });
        }
        this.setState({
            dogs: allDogs
        });
        //skriver objektet till en sträng
        localStorage.setItem('dogs', JSON.stringify(allDogs));
    };

    formPreventDefault = (e) => {
        e.preventDefault();
    }

    handleChange(event) {
        var temp = this.state.friends;
        temp.push(event.target.value);
        this.setState({ friends: temp });
    }

    deleteFriend(friend) {
        var temp = this.state.friends;
        temp = temp.filter(e => e !== friend);
        this.setState({ friends: temp });
    }

    render() {
        return <div>
            <h2>DogBook</h2>
            <a class="goback" href="" onClick={(e) => this.props.goBack(e)}>Go to users</a>
            <div class="container">
                <img class="doggie" src="https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_2166.jpg" alt="dog"></img>
                <form class="forms" onSubmit={this.formPreventDefault}> <br />
                    <label>Name: </label>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={e => this.change(e)}
                        required
                    /> <br></br>
                    <label>Nickname: </label>
                    <input
                        name="nick"
                        type="text"
                        value={this.state.nick}
                        onChange={e => this.change(e)}
                        required
                    /><br></br>
                    <label>Age: </label>
                    <input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={e => this.change(e)}
                        required
                    /><br></br>
                    <label>Bio: </label>
                    <input
                        name="bio"
                        type="text"
                        value={this.state.bio}
                        onChange={e => this.change(e)}
                        required
                    /><br></br>
                    <label>My friends: </label>
                    <select onChange={e => this.handleChange(e)}>
                        <option value="none">
                            Add dog friend
            </option>
                        {this.state.dogs && this.state.dogs.map(dog => <option key={dog} value={dog.name}>{dog.name}</option>)}
                    </select> {this.state.friends.length > 0 && this.state.friends.map(friend => <div><span key={friend}>{friend}</span> <span onClick={() => this.deleteFriend(friend)}>X</span></div>)}
                    <br></br>
                    <button type="button" onClick={(e) => this.OnSave(e)}>Save</button>
                </form>
            </div>
        </div >

    }
}





