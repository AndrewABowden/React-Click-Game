import React, {Component} from "react";
import "./style.css"

class Counter extends React.Component {
    state = {
        count: 0
    }

    handeIncrement() {
        this.setState({ count: this.state.count})
    }


}

class App extends Component {
    // getName = () => {
    //     axios.get("/api/name")
    // }


}