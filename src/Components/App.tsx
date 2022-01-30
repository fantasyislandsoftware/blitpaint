import React from "react";
import { Window, hot, View, Image2 } from "@nodegui/react-nodegui";
import Canvas from "./Canvas";
import { createBitmap } from "../Functions/graphics";

//console.log(__dirname);

//var fs = require("fs");
//let css = fs.readFileSync(
//  "/Users/andyjones/Documents/Projects/New/blitPaint/src/style.css",
//  null
//);

const minSize = { width: 300, height: 320 };

class App extends React.Component {
  render() {
    return (
      <Window minSize={minSize}>
        <View>
          {/*<Canvas bitmap={bitmap} />*/}
          <Image2></Image2>
        </View>
      </Window>
    );
  }
}

export default hot(App);
