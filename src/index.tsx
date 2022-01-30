import { Renderer, Button } from "@nodegui/react-nodegui";
import React from "react";
import App from "./Components/App";

import { QMainWindow, QLabel, QPushButton, WidgetEventTypes, QMouseEvent } from '@nodegui/nodegui';

/*const win = new QMainWindow();

const label = new QLabel();
label.setText('Move your mouse here');
label.setMouseTracking(true);

const button = new QPushButton();
button.setMouseTracking(true);

button.addEventListener(WidgetEventTypes.MouseMove, (nativeEvt : any) => {
    const mouseEvt = new QMouseEvent(nativeEvt);
    console.log('mouseMoved at: ', { x: mouseEvt.x(), y: mouseEvt.y() });
});

win.setCentralWidget(button);
win.show();
(global as any).win = win;*/

process.title = "My NodeGui App";
Renderer.render(<App />);
if (module.hot) {
  module.hot.accept(["./Components/App"], function() {
    Renderer.forceUpdate();
  });
}
