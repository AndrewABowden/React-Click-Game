import React, {Component} from "react";
import { Line } from 'rc-progress';
import Wrapper from ".components/Wrapper";
import Card from './components/Card';
import Heroes from "./Heroes.json";
import "./style.css"
// import API from "../../utils/API";

class App extends React.Component {
    state = {
        Heroes,
        topScore,
        guessesCorrect,
        message,
        lives
    }
    // handeIncrement() {
    //     this.setState({ count: this.state.count})
    // }

    setClicked = id => {
        //Set heroes state to default variable
        const Heroes = this.state.Heroes;
        //filter through Heroes obj cards
        const cardClicked = Heroes.filter(Hero => Hero.id === id);

        //if card clicked run score functions
        if(cardClicked[0].clicked) {
            guessesCorrect = 0;
            message = "Wrong. try again!";

            //change to map
                for(let i = 0; i < Heroes.length; i++) {
                    Heroes[i].clicked = false;
                }
        this.setState({message});
        this.setState({guessesCorrect});
        this.setState({Heroes});
            } else {
    cardClicked[0].clicked = true;
    //change guesses if right and add extra guesses
    guessesCorrect = guessesCorrect + 2;
    message = "You were right!"

        if(guessesCorrect > topScore) {
            topScore = guessesCorrect;
            lives++;
            this.setState({lives});
            this.setState({topScore});
            this.renderLives();
        }
        Heroes.sort((a,b) =? {
            return 0.5 - Math.random();
        });
        this.setState({Heroes}));
        this.setState({guessesCorrect});
        this.setState({message});
    }
};

renderLives () {
    let divs = [];

    for (let i = 0; i < this.state.lives; i++) {
        divs.push(<div key={i} className="life"></div>);
    }

    return <div>{divs}</div>;
};

render() {
    return (
        <Wrapper>
            <div className="character">
                <div className="characterText">
                    <h1 className="banner">The Lord of The Rings Click Game</h1>
                    <h3 className="rules">Save Middle Earth from Sauron!</h3>
                    <h3 className="message">{this.state.message}</h3>
                </div>
                <div className="buttonWrapper">
                    <img className="buttons" src="images/buttons.png" alt="lotr buttons" />
                </div>
                    <div className="lifeWrapper">
                    {this.renderLives()}
                    <Line
                        classname="progress-bar"
                        percent={this.state.guessesCorrect}
                        trailWidth="4"
                        strokWidth="5"
                        strokeColor="red"
                            strokeLinecap="square" />
                    </div>
            </div>
            <div className="row">
                {this.state.Heroes.map(Hero => (
                    <Card   
                        setClicked={this.setClicked}
                        id={Hero.id}
                        key={Hero.id}
                        image={Hero.image}
                        name={Hero.name}
                        className="col-sm-1" />
            </div>
        </Wrapper>
    );
}
}
}
export default App;