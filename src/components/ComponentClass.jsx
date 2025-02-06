import { Component } from "react";
import { Button } from "react-bootstrap";

class ComponentClass extends Component {
  state = {
    monTexte: "hello",
    value: 0,
  };
  handleClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <>
        {this.state.monTexte}

        <br />
        <Button variant="primary" onClick={this.handleClick}>
          Incrémenter
        </Button>

        <h2>{this.state.value}</h2>
      </>
    );
  }
}

export default ComponentClass;
