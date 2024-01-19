function solution(code) {
    let mode = 0;
    const codeArr = [...code];
    const retArr = []
    
    codeArr.forEach((e, i) => {
        if (mode === 0) {
            if (e !== "1" && i % 2 === 0) {
                retArr.push(e);
            } else if (e === "1") {
            mode = 1;
            }
        } else {
            if (e !== "1" && i % 2 !== 0) {
                retArr.push(e);
            } else if (e === "1") {
                mode = 0;
            }
        }
    })
    
    const ret = retArr.join('');
    
    if (!ret) {
        return "EMPTY";
    }
    return ret;
}