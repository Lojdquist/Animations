import React, { Component } from "react";
import { generateSvgPath } from "../factories/svgGenerator";
import "../css/styles.css";

"use strict";

const WINDOW_HEIGHT = window.innerHeight - 20;
const WINDOW_WIDTH = window.innerWidth - 20;
const PATHS_TO_GENERATE = 2;

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    let i;
    const tempPaths = [];
    for (i = 0; i < PATHS_TO_GENERATE; i++) {
      tempPaths.push(generateSvgPath(WINDOW_HEIGHT, WINDOW_WIDTH));
    }

    this.state = {
      paths: tempPaths
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ paths: this.updateSvg() }),
      5000
    );
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.interval);
  }


  updateSvg() {
    let i;
    const tempPaths = [];
    for (i = 0; i < PATHS_TO_GENERATE; i++) {
      tempPaths.push(generateSvgPath(WINDOW_HEIGHT, WINDOW_WIDTH));
    }
    return tempPaths;
  }

  render() {
    return (
      <div>
        <svg className="" width={WINDOW_WIDTH} height={WINDOW_HEIGHT}>
          {this.state.paths.map((element, index) => (
            <path
              id={"svg--" + index}
              className="svgAnimation"
              d={element}
              stroke="red"
              fill="none"
            />
          ))}
        </svg>
      </div>
    );
  }
}

export default HomeScreen;
