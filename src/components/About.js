import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor() {
        super()
        // console.log('Parent Constructor')
    }

    componentDidMount() {
        // console.log('Parent Component Did Mount')
    }

    render() {
        // console.log('Parent Render')
        return <div>
        <h1>About Us</h1>
        <h3>This is a food ordering app.</h3>
        <div>
            <UserContext.Consumer>
                {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
        </div>
        <UserClass name={'Shivi'} location={'Gurgaon'}/>
        {/* <UserClass name={'Jugnu'} location={'Noida'}/> */}
    </div>
    }
}

export default About;