/*
If you need more context to this codesandbox, 
here's an article I wrote that might help:
https://celiaongsl.medium.com/why-react-classnames-is-a-lifesaver-and-how-you-should-use-it-if-you-arent-already-b25a44ed5603?source=friends_link&sk=748e531b36feddc2cd6f55bd6a9a98a9
*/

import React from "react";
import "./styles.css";
import Basic from "./components/Basic";
import BasicWithClassnames from "./components/BasicWithClassnames";

export default function App() {
  return (
    <div className="App">
      <h1>Basic className Manipulation: </h1>
      <Basic success />
      <h1>Basic but with classnames: </h1>
      <BasicWithClassnames success />
    </div>
  );
}
