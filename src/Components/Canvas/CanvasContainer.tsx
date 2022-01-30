import React, { useState } from "react";
import {
  Text,
  Window,
  hot,
  View,
  useEventHandler,
  Button,
  Image,
} from "@nodegui/react-nodegui";
import {
  QIcon,
  QKeyEvent,
  QWidgetSignals,
  QPushButtonSignals,
  QLabelSignals,
  QMouseEvent,
  QPixmap,
  AspectRatioMode,
} from "@nodegui/nodegui";
import { style } from "../../style";
import { createBitmap } from "../../Functions/graphics";

interface IProps {
  bitmap : Buffer;
}

const Canvas = (props : IProps) => {
  

  //const [bitImage, setBitImage] = useState<Buffer>(createBitmap(pixelDataA));
  const [test, setTest] = useState<number>(0);
  const handler = useEventHandler<QLabelSignals>(
    {
      MouseMove: (nativeEvt: any) => {
        const mouseEvt = new QMouseEvent(nativeEvt);
        //console.log(mouseEvt.x());
      },
      MouseButtonPress: (nativeEvt: any) => {
        const mouseEvt = new QMouseEvent(nativeEvt);
      },
    },
    []
  );

  //const image = createBitmap(pixelDataA);

  const buttonHandler = {
    clicked: (e: any) => {
      
    },
  };

  //console.log(test);

  //let bit = createBitmap(pixelDataA);
  //if (test == 1) {
  //  bit = createBitmap([]);
    //console.log(bit);
  //}
  //console.log(bit);

  return (
    <Image
      //key={Math.random()}
      style={style.canvas}
      mouseTracking={true}
      on={handler}
      //buffer={bitmap}
    ></Image>
  );
};

export default Canvas;
