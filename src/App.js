import React, {Component} from 'react';
import Graph from "./Graph";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catVotes: null,
            dogVotes: null,
            both: null
        };
    }

    render() {
        return (<div className="App">
            <Graph catVotes = {this.state.catVotes} dogVotes = {this.state.dogVotes} both = {this.state.both}/>
            <button onClick={this.handleCatClick.bind(this)}>Vote for Cats</button>
            <button onClick={this.handleDogClick.bind(this)}>Vote for Dogs</button>
            <button onClick={this.handleBothClick.bind(this)}>Both</button>
        </div>);
    }

    handleCatClick() {
        this.setState(prevState => ({
            catVotes: prevState.catVotes + 1
        }))
      };

    handleDogClick() {
        this.setState(prevState => ({
            dogVotes: prevState.dogVotes + 1
        }))
      };
    handleBothClick() {
        this.setState(prevState => ({
            both: prevState.both + 1
        }))
      };
}

export default App;
