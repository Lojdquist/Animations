import React, { Component } from "react";
import HomeScreen from "./components/HomeScreen";
import "./css/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowPicker: "startScreen",
    };

    this.renderStartScreen = this.renderStartScreen.bind(this);
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        windowPicker: "homeScreen"
      })
    }, 4000);
  }

  renderStartScreen() {
    return (
      <div className="welcomeScreenContainer">
        <div className="welcomeScreenContent">
          <h1>Welcome Text!</h1>
        </div>
        <div className="textCursor">
        </div>
      </div>
    );
  }

  renderHomeScreen(){
    return(
        <HomeScreen />
    );
  }

  mapWindowStates = {
    startScreen: this.renderStartScreen(),
    homeScreen: this.renderHomeScreen()
  };

  render() {
    let renderWindow = this.mapWindowStates[this.state.windowPicker];

    return <div className="body">{renderWindow}</div>;
  }
}

export default App;
