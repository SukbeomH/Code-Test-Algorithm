function solution(keyinput, board) {
    let answer = [0, 0];
    const width = (board[0] - 1) / 2;
    const height = (board[1] - 1) / 2;
    
    keyinput.forEach((ele) => {
        switch(ele) {
            case "up" :
                if (answer[1] === height) break;
                answer[1] = answer[1] + 1;
                break;
            case "down" :
                if (answer[1] === -height) break;
                answer[1] = answer[1] - 1;
                break;
            case "left" :
                if (answer[0] === -width) break;
                answer[0] = answer[0] - 1;
                break;
            case "right" :
                if (answer[0] === width) break;
                answer[0] = answer[0] + 1;
                break;
        }
    })
    
    return answer;
}