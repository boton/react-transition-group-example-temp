import React, { Component } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

class App extends Component {
  state = {
    showBalloon: false
  };

  toggle = () => {
    this.setState(prevState => ({
      showBalloon: !prevState.showBalloon
    }));
  };

  render() {
    return (
      <div className="container">
        <button
          className={cx("toggler", {
            "toggler--active": this.state.showBalloon
          })}
          onClick={this.toggle}
        >
          Menu
        </button>
        <CSSTransition
          in={this.state.showBalloon}
          timeout={200}
          classNames="balloon"
          unmountOnExit
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li className="list-item">Profile</li>
              <li className="list-item">Favorites</li>
              <li className="list-item">Sign out</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
