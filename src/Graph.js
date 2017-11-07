import React, {Component} from 'react';
import GraphBar from "./GraphBar";

class Graph extends Component {
  render() {
    return (<div className="Graph">
      <GraphBar label={"Cats"} value={this.props.catVotes}/>
      <GraphBar label={"Dogs"} value={this.props.dogVotes}/>
      <GraphBar label={"Both"} value={this.props.both}/>
    </div>)
  };
};

export default Graph;
