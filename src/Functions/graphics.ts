import { toBytesInt32 } from "../Functions/data";

export const createBitmap = (pixelData : any) => {

    /*let bitmap: any = [
      0x42, 0x4d,               // BM
      0x46, 0x00, 0x00, 0x00,   // Size
      0x00, 0x00,               // Unused
      0x00, 0x00,               // Unused
      0x36, 0x00, 0x00, 0x00,   // Offset where the pixel array can be found
      0x28, 0x00, 0x00, 0x00,   // Number of bytes in DIB header (from this point)
      0x03, 0x00, 0x00, 0x00,   // Width
      0x02, 0x00, 0x00, 0x00,   // Height
      0x01, 0x00,               // Plane
      0x18, 0x00,               // Bits
      0x00, 0x00, 0x00, 0x00,   //Pixel Compression
      0x10, 0x00, 0x00, 0x00,   // Size of the raw bitmap data (including padding)
      0x00, 0x00, 0x00, 0x00,   // Print resolusion
      0x00, 0x00, 0x00, 0x00,   //
      0x00, 0x00, 0x00, 0x00,   //Number of colours
      0x00, 0x00, 0x00, 0x00,   //Important Colours
      0xff, 0xff, 0xff,
      0xff, 0xff, 0xff,
      0xff, 0xff, 0xff,
      0x00,
      0x00,
      0x00,
      0xff,0xff, 0xff,
      0xff, 0xff, 0xff,
      0xff, 0xff, 0xff,
      0x00,
      0x00,
      0x00
    ];*/
  
    const appendArray = (source : any, dest : any) => {
      for (let n in source) {
        dest.push(source[n]);
      }
      return dest;
    }
  
    const bm : any = [0x42, 0x4d];
    const size : any = toBytesInt32(4,0);
    const unused : any = [0x00,0x00];
    const offset : any = [0x36, 0x00, 0x00, 0x00];
    const bytesInDIBHeader : any = [0x28, 0x00, 0x00, 0x00];
    const width = toBytesInt32(4,2);
    const height = toBytesInt32(4,2);
    const plane = toBytesInt32(2,0x01);
    const bits = toBytesInt32(2,0x18);
    const pixelCompression = toBytesInt32(4,0);
    const rawBitmapSize = toBytesInt32(4,0x10);
    const printResolution = toBytesInt32(4,0);
    const NumberOfColors = toBytesInt32(4,0);
    const importantColors = toBytesInt32(4,0);
  
    let bitmap : any = [];
    bitmap = appendArray(bm,bitmap);
    bitmap = appendArray(size,bitmap);
    bitmap = appendArray(unused,bitmap);
    bitmap = appendArray(unused,bitmap);
    bitmap = appendArray(offset,bitmap);
    bitmap = appendArray(bytesInDIBHeader, bitmap);
    bitmap = appendArray(width,bitmap);
    bitmap = appendArray(height,bitmap);
    bitmap = appendArray(plane,bitmap);
    bitmap = appendArray(bits,bitmap);
    bitmap = appendArray(pixelCompression,bitmap);
    bitmap = appendArray(rawBitmapSize,bitmap);
    bitmap = appendArray(printResolution,bitmap);
    bitmap = appendArray(printResolution,bitmap);
    bitmap = appendArray(NumberOfColors,bitmap);
    bitmap = appendArray(importantColors,bitmap);
    bitmap = appendArray(pixelData,bitmap);
  
    //console.log(bitmap);
    
    const buffer = Buffer.from(bitmap);
    
    return buffer;
  };
  