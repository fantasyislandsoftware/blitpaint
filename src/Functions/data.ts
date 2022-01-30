export const toBytesInt32 = (size : number, num : number) => {
    let result : any = [];
    let arr = new ArrayBuffer(size);
    let view = new DataView(arr);
    if (size == 2) {
        view.setUint16(0, num, false);
    }
    if (size == 4) {
        view.setUint32(0, num, false);
    }
    let m : number = size-1;
    for (let n = 0; n < size; n++) {
        result[n] = view.getUint8(m);
        m--;
    }
    return result;
}