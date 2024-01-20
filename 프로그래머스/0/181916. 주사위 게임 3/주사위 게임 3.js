function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const obj = {};
    
    arr.forEach((ele) => {
        if (!obj[ele]) {
            obj[ele] = 1;
        } else {
            obj[ele] = obj[ele] + 1;
        }
    });
    
    const keysArr = Object.keys(obj);
    const countArr = Object.values(obj);
    const length = keysArr.length
    const keysNumber = keysArr.map(e => Number(e));
    
    if (length === 1) {
        return 1111 * keysNumber[0];
    } else if (length === 2) {
        if (countArr[0] === 3) {
            return ((10 * keysNumber[0]) + keysNumber[1]) ** 2;
        } else if (countArr[0] === 1) {
            return (10 * keysNumber[1] + keysNumber[0]) ** 2;
        } else if (countArr[0] === 2) {
            return (keysNumber[0] + keysNumber[1]) * Math.abs(keysNumber[0] - keysNumber[1]);
        }
    } else if (length === 3) {
        if (countArr[0] === 2) {
            return keysNumber[1] * keysNumber[2];
        } else if (countArr[1] === 2) {
            return keysNumber[0] * keysNumber[2];
        } else if (countArr[2] === 2) {
            return keysNumber[0] * keysNumber[1];
        }
    } else if (length === 4) {
        return keysNumber.sort((a, b) => a - b)[0]
    }
}