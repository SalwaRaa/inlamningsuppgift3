import React from "react";

export class ViewProfile extends React.Component {

    constructor(props) {
        super(props)
    }




    render() {
        return (
            <div>
                <img class="doggie" src='https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_2166.jpg'></img>
                <p>Name: {this.props.dog.name}</p>
                <p>Nick: @{this.props.dog.nick}</p>
                <p>Age: {this.props.dog.age}</p>
                <p>Bio: {this.props.dog.bio}</p>
                <p>Friends</p>
                {this.props.dog.friends.length > 0 && this.props.dog.friends.map(friend => <div><span key={friend}>@{friend}</span> <span onClick={() => this.props.switchDogs(friend)}></span></div>)}
                <a href="" onClick={(e) => this.props.goBack(e)}>Go back</a>
            </div>
        )
    }
}