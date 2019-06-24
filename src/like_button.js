'use strict';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { states: ['NSW','VIC','QLD'],communities:['Aura','Willowdale'],stage:['lot 5','lot 6'] };
    this.changeState = (event) => {
      this.setState({selectedState:event.target.value})
      console.log(event)
    }
  }

  render() {
    return (
      <div>
        <select onChange={this.changeState}>
          {this.state.states.map((state) => <option>{state}</option>)}
        </select>
        <select>
          {this.state.communities.map((community) => <option>{community}</option>)}
        </select>
        <select>
          {this.state.stage.map((stage) => <option>{stage}</option>)}
        </select>
        {this.state.selectedState}
      </div>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);