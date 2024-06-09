import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           userInfo: {
            name: 'Dummy',
            location: 'Default'
           }
        }

        // console.log(this.props.name + 'Constructor')
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/Garvita226')
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo: json
        })
        // console.log(this.props.name + 'Component Did Mount')
    }

    render() {
        // console.log(this.props.name + 'Render')
        const {name, location} = this.state.userInfo

        return (
            <div className="user">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }    
}

export default UserClass;